class videosBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <style>
        .videos-block {
          margin: 50px 0;
        }
        .videos-block__container {
          width: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .videos-block__titles {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        @media only screen and (min-width: 768px) {
          .videos-block__titles {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
          }
        }
        
        @media only screen and (min-width: 1275px) {      
          .videos-block {
            padding: 0 30px;
          }      
          .videos-block__titles {          
            display: grid;
            grid-template-columns: repeat(3, minmax(340px, 600px));
            grid-template-rows: repeat(auto-fit, minmax(188px, 1fr));
          }
          .videos-block__container {
            gap: 35px;
          }
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
