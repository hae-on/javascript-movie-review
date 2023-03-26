import { dispatchCustomEvent } from "./../utils/dom";
import { $ } from "../utils/dom";

class SearchBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEvent();
  }

  render() {
    this.innerHTML = /* html */ `
    <form id="search-form">
      <input id="search-input" type="text" placeholder="검색" />
      <button class="search-button">검색</button>
    </form>
  `;
  }

  addEvent() {
    $("form")?.addEventListener("submit", (event) => {
      this.onSubmitForm(event);
    });
  }

  onSubmitForm(event: Event) {
    event.preventDefault();

    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const input = form.elements.namedItem("search-input");
    if (!(input instanceof HTMLInputElement)) return;

    const inputValue = input.value.trim();
    if (inputValue === "") return;

    dispatchCustomEvent(this, {
      eventType: "searchMovieData",
      data: input.value,
    });

    form.reset();
  }
}

customElements.define("search-box", SearchBox);
