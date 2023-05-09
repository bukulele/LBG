class footerBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .footer a {
          text-decoration: none;
        }
        .footer__container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .footer__upper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #25272A;          
        }
        .footer__lower {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          background: linear-gradient(0deg, #8C171E, #8C171E), #6C060C;
          gap: 30px;
          padding: 20px 20px 50px;
        }
        .footer__navigation-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer__links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .footer__links li {
          list-style: none;
          display: flex;
          align-items: center;
        }
        
        .footer__links a {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 5px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          flex-wrap: nowrap;
          white-space: nowrap;
          width: 100%;
        }
        .social__disclaimer {
          display: flex;
          gap: 10px;
          justify-content: flex-start;
          align-items: center;  
        }
        .social__disclaimer > p {
          color: #2DC115;
          font-size: 14px;
          font-weight: 700;
        }
        .footer__18plus {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 50px;
          min-height: 50px;
          max-width: 50px;
          max-height: 50px;
          border-radius: 50%;
          background-color: #2DC115;
        }
        .footer__18plus p {
          color: #fff;
          font-weight: 700;
          font-size: 20px;
        }
        .social__links {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
      </style>
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__upper">
          </div>
          <div class="footer__lower">
            <div class="footer__navigation-container">
              <ul class="footer__links">
                <li><a href="index.html">
                  <object data="/assets/icons/arrowLeft.svg" width="21" height="21"></object>                
                  HOME</a></li>
                <li><a href="index.html">
                  <object data="/assets/icons/videos.svg" width="21" height="21"></object> 
                  VIDEOS</a></li>
                <li><a href="index.html#about">
                  <object data="/assets/icons/star.svg" width="21" height="21"></object>       
                BONUS</a></li>
                <li><a href="index.html#services">
                  <object data="/assets/icons/camera.svg" width="21" height="21"></object> 
                LIFE GIRLS</a></li>
                <li><a href="index.html#contact">
                  <object data="/assets/icons/newspaper.svg" width="21" height="21"></object> 
                NEWS</a></li>
                <li><a href="index.html">
                  <object data="/assets/icons/letter.svg" width="21" height="21"></object> 
                  CONTACT US</a></li>
              </ul>
            </div>
            <div class="footer__social">
              <div class="social__disclaimer">
                <div class="footer__18plus">
                  <p>18+</p>
                </div>
                <p>ALL MODELS APPEARING ON THIS WEBSITE ARE 18 YEARS OR OLDER</p>
              </div>
              <div class="social__links">
                <a href="" class="btn btn--yellow btn--mobile-small">
                  
                  <p>MODELS WANTED</p>
                </a>
                <a href="" class="btn btn--yellow btn--mobile-small">WEBMASTERS</a>
              </div>
              <div class="social__networks">
                <p>Follow Us:</p>
              </div>
            </div>
            <div class="footer__rights"></div>
            <div class="footer__partners"></div>
          </div> 
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-block', footerBlock);
