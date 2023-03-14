import { StarFilled } from "../../images";

customElements.define(
  "movie-item",
  class MovieItem extends HTMLElement {
    constructor() {
      super();

      const posterPath = this.getAttribute("poster-path");
      const title = this.getAttribute("title");
      const voteAverage = this.getAttribute("vote_average");

      this.innerHTML = /* html */ `
        <a href="#">
          <div class="item-card">
            <img
              class="item-thumbnail"
              src="https://image.tmdb.org/t/p/original/${posterPath}"
              loading="lazy"
              alt="${title}"
            />
            <p class="item-title">${title}</p>
            <p class="item-score"><img src="${StarFilled}" alt="별점" />${voteAverage}</p>
          </div>
        </a>
  `;
    }
  }
);
