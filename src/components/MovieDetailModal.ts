import { StarFilled } from "../../images";
import type { Genre, Movie } from "../types/type";
import { Word } from "../utils/constants";
import { $ } from "../utils/dom";

class MovieDetailModal extends HTMLElement {
  constructor() {
    super();
  }

  render(movie: Movie, genres: Array<Genre>) {
    const { id, title, poster_path, genre_ids, vote_average, overview } = movie;

    const selectedGenres = genres
      .filter((genre: Genre) => genre_ids?.includes(genre.id))
      .map((genre: Genre) => genre.name);

    const movieOverView = overview ? overview : `${Word.OVERVIEW_EMPTY}`;

    this.innerHTML = /* html */ `
      <dialog>
      <div class="modal-backdrop"></div>
      <div class="modal">
        <div class="modal-header">
          <span class="modal-title">${title}</span>
          <button class="modal-close-button">
            <span class="close">X</span>
          </button>
        </div>
        <div class="modal-content">
          <div>
            <img class="modal-image" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}">
          </div>
          <div class="modal-detail-content">
            <div class="modal-content-header">
              <span class="modal-genre">${selectedGenres}</span>
              <span>
                <img src="${StarFilled}" class="vote-star" alt="별점" />
                ${vote_average}
              </span>
            </div>
            <p class="modal-overview">${movieOverView}</p>
            <div class="vote-container">
            <movie-vote modal-id="${id}"></movie-vote>
            </div>
          </div>
        </div>
        </div>
      </dialog>
    `;
    this.addEvent();
  }

  addEvent() {
    const dialog = $("dialog");
    const $elements = [$(".modal-backdrop"), $(".modal-close-button")];

    if (!(dialog instanceof HTMLDialogElement)) return;

    $elements.forEach((element) => {
      element?.addEventListener("click", () => {
        dialog.close();
        document.body.classList.remove("scroll-lock");
      });
    });
  }

  openModal() {
    const dialog = $("dialog");
    if (!(dialog instanceof HTMLDialogElement)) return;

    dialog.showModal();
    document.body.classList.add("scroll-lock");
  }
}

interface MovieDetailModal {
  "movie-detail-modal": typeof MovieDetailModal;
}

customElements.define("movie-detail-modal", MovieDetailModal);

export default MovieDetailModal;
