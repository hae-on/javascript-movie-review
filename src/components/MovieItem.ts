customElements.define(
  "movie-item",
  class MovieItem extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = /* html */ `
      <li>
        <a href="#">
          <div class="item-card">
            <img
              class="item-thumbnail"
              src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
              loading="lazy"
              alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score"><img src="./star_filled.png" alt="별점" /> 6.5</p>
          </div>
        </a>
      </li>
  `;
    }
  }
);
