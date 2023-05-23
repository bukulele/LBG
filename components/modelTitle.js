class modelTitle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="css/style.css" />
    <style>
      .model-title__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 340px;
        height: auto;
      }
      .model-title__image {
        width: 100%;
        height: 484px;
        border-radius: 30px;
        overflow: hidden;
      }
      .model-title__image img,
      ::slotted(img) {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
      }
      .model-title__block-over {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 27px 17px;
        width: 100%;
        height: 100%;
        background: linear-gradient(2.46deg, rgba(29, 30, 32, 0.85) 6.66%, rgba(29, 30, 32, 0) 22.42%);
      }
      .model-title__labels {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .model-title__videos {
        padding: 10px 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #292B30;
        border-radius: 50px;
      }
      .model-title__videos p {
        color: #F3B800;
        font-size: 12px;
        font-weight: 700;
      }
    </style>
    <a class="model-title__container">
      <div class="model-title__image">
        <slot name="model-title-image"></slot>
      </div>
      <div class="model-title__block-over">
        <div class="model-title__labels">
          <div class="model-title__videos"><p>12 videos</p></div>
          <div class="model-title__award">
            <div class="award__icon-container"></div>
            <p></p>
          </div>
        </div>
        <div class="model-title__bottom-block">
          <div class="model-title__games"></div>
          <div class="model-title__punishments"></div>
        </div>
      </div>
      <div class="model-title__info">
        <div class="model-title__model-data"></div>
        <div class="model-title__model-about"></div>
      </div>
    </a>`;
  }
}

customElements.define("model-title", modelTitle);
