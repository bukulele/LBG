class videoTitle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <div>
        <slot name="video-title"></slot>
      </div>
    `;
  }
}

customElements.define("video-title", videosBlock);
