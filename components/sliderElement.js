class sliderElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <a class="slider-element__container">
        <slot name="video-title-image"></slot>
        <div class="slider-element__block-over">
          <p class="slider-element__name">Strip Red Light Green Light With Delilah Minx</p>
          <div class="slider-element__info">
            <div class="slider-element__videos-number"><p>51 videos</p></div>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define("slider-element", sliderElement);
