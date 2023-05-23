class modelTitle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <a class="model-title__container">
      <slot name="model-title-image"></slot>
      <div class="model-title__block-over">
        <div class="model-title__labels"></div>
        <div class="model-title__games"></div>
        <div class="model-title__punishments"></div>
      </div>
      <div class="model-title__info">
      <div class="model-title__model-name"></div>
      <div class="model-title__model-age"></div>
      </div>
    </a>`;
  }
}

customElements.define("model-title", modelTitle);
