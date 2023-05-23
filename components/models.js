class modelsBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <div class="models-block">
        <div class="models-block__container">
          <h2>MODELS</h2>
          <div class="models-block__titles">
            <slot name="model_1"></slot>
            <slot name="model_2"></slot>
            <slot name="model_3"></slot>
            <slot name="model_4"></slot>
            <slot name="model_5"></slot>
            <slot name="model_6"></slot>
            <slot name="model_7"></slot>
            <slot name="model_8"></slot>
          </div>
          <div class="models-block__button-container">
            <a href="" class="btn btn--red">SHOW MORE MODELS</a>  
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("models-block", modelsBlock);
