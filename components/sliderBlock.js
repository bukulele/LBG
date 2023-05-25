class sliderBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <div class="slider-block">
        <div class="slider-block__container">
          <h2><slot name="slider-block-title"></slot></h2>
          <div class="slider-block__slider">
            <slot name="slider-element-1"></slot>            
          </div>
          <div class="slider-block__buttons"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("slider-block", sliderBlock);
