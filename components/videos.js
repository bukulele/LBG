class videosBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="videos-block__container">
        Videos go here
      </div>
    `;
  }
}

customElements.define("videos-block", videosBlock);
