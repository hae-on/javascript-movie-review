import { getSavedData } from "./../utils/localStorage";
import { StarFilled, StarEmpty } from "../../images";
import { $, $$ } from "../utils/dom";
import { saveData } from "../utils/localStorage";

class Vote extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  get idAttribute() {
    return Number(this.getAttribute("modal-id"));
  }

  renderStarIcon() {
    return Array(5)
      .fill("")
      .map(
        (_, i) =>
          `<img class="star-icon" data-order="${
            i + 1
          }" src="${StarEmpty}" alt="start" />`
      )
      .join("");
  }

  render() {
    this.innerHTML = /* html */ `
        <span class="vote-title">내 별점</span>
        <div class="vote-stars">
          ${this.renderStarIcon()}
        </div>
        <span class="vote-score">0</span>
        <span class="vote-message">별점을 눌러주세요</span>
      `;

    this.judgeProcess();
  }

  judgeProcess() {
    const id = this.idAttribute;
    const order = getSavedData("modalData")[id];

    if (order) {
      this.renderScoreAndMessage(order);
    }
    this.addClickStarEvent();
  }

  addClickStarEvent() {
    $(".vote-stars")?.addEventListener("click", (event) => {
      const id = this.idAttribute;
      const target = event.target;

      if (target instanceof HTMLElement) {
        const starIcon = target.closest(".star-icon");
        const order =
          starIcon instanceof HTMLElement ? Number(starIcon.dataset.order) : 0;

        this.renderScoreAndMessage(order);
        this.saveUserOrder(id, order);
      }
    });
  }

  renderScoreAndMessage(order: number) {
    const $voteScore = $(".vote-score");
    const $voteMessage = $(".vote-message");
    const message = this.getMessage(order);
    const score = order * 2;

    $voteScore.textContent = String(score);
    $voteMessage.textContent = message;

    this.renderStar(order);
  }

  renderStar(order: number) {
    $$(".star-icon")?.forEach((star, index) => {
      (<HTMLImageElement>star).src = index < order ? StarFilled : StarEmpty;
    });
  }

  getMessage(order: number) {
    switch (order) {
      case 1:
        return "최악이예요";
      case 2:
        return "별로예요";
      case 3:
        return "보통이에요";
      case 4:
        return "재미있어요";
      case 5:
        return "명작이에요";
      default:
        return "별점을 눌러주세요";
    }
  }

  saveUserOrder(id: number, order: number) {
    const userData = {
      ...getSavedData("modalData"),
      [id]: order,
    };

    saveData("modalData", userData);
  }
}

customElements.define("movie-vote", Vote);

export default Vote;
