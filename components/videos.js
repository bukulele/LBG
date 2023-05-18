class videosBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <div class="videos-block">
        <div class="videos-block__container">
          <h2>HOTTEST AND FRESHEST VIDEO</h2>
          <div class="videos-block__titles">
            <slot name="video_1"></slot>
            <slot name="video_2"></slot>
            <slot name="video_3"></slot>
            <slot name="video_4"></slot>
            <slot name="video_5"></slot>
            <slot name="video_6"></slot>
          </div>
          <div class="videos-block__button-container">
            <a href="" class="btn btn--red">SHOW MORE VIDEOS</a>  
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("videos-block", videosBlock);
