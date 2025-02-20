import { Logo, Search } from "../../images";
import { $ } from "../utils/dom";

class MovieHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEvent();
  }

  render() {
    this.innerHTML = /* html */ `
    <header>
    <p class="title-logo"><img src="${Logo}" alt="MovieList" /></p>
    <button class="mini-search-box"><img class="search-icon" src="${Search}"/></button>
    <search-box class="search-box"></search-box>
  </header>`;
  }

  addEvent() {
    $(".title-logo")?.addEventListener("click", () => {
      location.reload();
    });

    const mobileButton = $(".mini-search-box");
    const searchBox = $(".search-box");

    if (
      mobileButton instanceof HTMLElement &&
      searchBox instanceof HTMLElement
    ) {
      mobileButton.addEventListener("click", () => {
        mobileButton.style.display = "none";
        searchBox.style.display = "block";
      });
    }
  }
}

customElements.define("movie-header", MovieHeader);
