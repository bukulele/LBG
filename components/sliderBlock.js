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
            <slot name="slider-element-2"></slot>            
            <slot name="slider-element-3"></slot>            
            <slot name="slider-element-4"></slot>            
            <slot name="slider-element-5"></slot>            
            <slot name="slider-element-6"></slot>            
            <slot name="slider-element-7"></slot>            
            <slot name="slider-element-8"></slot>            
            <slot name="slider-element-9"></slot>            
          </div>
          <div class="slider-block__buttons">
            <div class="btn btn--slider slider-block__slide-left">
              <svg viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1748 7.72412C21.1748 8.13833 20.839 8.47412 20.4248 8.47412L2.42412 8.47412C2.0099 8.47412 1.67412 8.13833 1.67412 7.72412C1.67412 7.30991 2.0099 6.97412 2.42412 6.97412L20.4248 6.97412C20.839 6.97412 21.1748 7.30991 21.1748 7.72412Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90494 14.3003C6.58673 14.5654 6.11381 14.5225 5.84863 14.2043L1.1152 8.52435C0.728878 8.06079 0.72888 7.38742 1.1152 6.92385L5.84863 1.24395C6.11381 0.92575 6.58673 0.882766 6.90494 1.14795C7.22314 1.41312 7.26612 1.88605 7.00094 2.20425L2.40089 7.7241L7.00094 13.244C7.26612 13.5622 7.22314 14.0351 6.90494 14.3003Z" fill="currentColor"/>
              </svg>            
            </div>
            <div class="btn btn--slider slider-block__slide-right">
              <svg viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.825195 7.72412C0.825195 7.30991 1.16098 6.97412 1.5752 6.97412L19.5759 6.97412C19.9901 6.97412 20.3259 7.30991 20.3259 7.72412C20.3259 8.13833 19.9901 8.47412 19.5759 8.47412L1.5752 8.47412C1.16098 8.47412 0.825195 8.13833 0.825195 7.72412Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0951 1.14798C15.4133 0.882804 15.8862 0.925788 16.1514 1.24399L20.8848 6.92389C21.2711 7.38746 21.2711 8.06083 20.8848 8.52439L16.1514 14.2043C15.8862 14.5225 15.4133 14.5655 15.0951 14.3003C14.7769 14.0351 14.7339 13.5622 14.9991 13.244L19.5991 7.72414L14.9991 2.20429C14.7339 1.88609 14.7769 1.41316 15.0951 1.14798Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("slider-block", sliderBlock);
