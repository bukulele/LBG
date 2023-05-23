class modelTitle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <slot name="model-title-image"></slot>`;
  }
}

customElements.define("model-title", modelTitle);
