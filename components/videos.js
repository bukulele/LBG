class videosBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <style>
        .videos-block__container {
          width: 340px;
          margin: auto;
          display: flex;
          flex-direction: column;
        }
        .videos-block__titles {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
      </style>
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
