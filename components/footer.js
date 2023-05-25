class footerBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
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
          background-color: #25272A;  
        }
        .footer__upper {
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: repeat(4, auto);
          grid-template-areas: "footerFutured"
          "footerText"
          "footerBenefits"
          "footerAward";
          width: 100%;
          max-width: 1400px;  
          padding: 0 25px;      
          gap: 20px;
          place-items: center;
        }
        .upper__footer-futured {
          grid-area: footerFutured;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        /*.upper__footer-futured h2 {*/
        /*  font-weight: 800;*/
        /*  color: #fff;*/
        /*  font-size: 40px;*/
        /*}*/
        .footer-futured__logos {
          padding: 0 40px 40px 40px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .footer-futured__logos img {
          width: 20%;
          height: auto;
        }
        .upper__footer-text {
          grid-area: footerText;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: fit-content;
          color: #fff;
        }
        .upper__footer-text h3 {
          text-align: center;
          text-transform: uppercase;
        }
        .upper__footer-text p {
          text-align: justify;
          font-size: 14px;
          font-weight: 500;
        }
        .upper__footer-benefits {
          grid-area: footerBenefits;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: fit-content;
          color: #fff;
        }
        .upper__footer-benefits h4 {
          text-align: center;
          text-transform: uppercase;
          color: #FFC30A;
        }
        .upper__footer-benefits ul {
          font-size: 14px;
          margin-top: 1rem;
        }
        .upper__footer-benefits li {
          list-style: none;
          font-weight: 500;
        }
        .upper__footer-benefits li::before {
          content: "\\2022";  
          color: #FFC30A; 
          font-weight: bold; 
          display: inline-block;
          width: 1em;
        }
        .upper__footer-award {
          margin: 10px 0;
          width: fit-content;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
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
        .footer__social {
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: repeat(3, auto);
          grid-template-areas: "socialDiscaimer"
          "socialLinks"
          "socialNetworks";
          place-items: center;
          gap: 30px;
        }
        .social__disclaimer {
          grid-area: socialDiscaimer;
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
          grid-area: socialLinks;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .social__networks {
          grid-area: socialNetworks;
          display: flex;
          align-items: center;
          gap: 20px;
          color: #fff;
        }
        .social__networks p {
          white-space: nowrap;
        }
        .footer__rights {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .footer__rights p {
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
        }
        .footer__partners {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }
        .footer__partners img {
          height: 100%;
          width: auto;
        }
        @media only screen and (min-width: 768px) {
          .footer__upper {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
            grid-template-areas: 
            "footerFutured footerFutured"
            "footerText footerText"
            "footerAward footerBenefits";
          }
          .upper__footer-benefits {
            align-items: flex-start;
          }
          .footer-futured__logos img {
            width: 15%;
            height: auto;
          }
          .footer__social {
            grid-template-columns: auto auto;
            grid-template-rows: repeat(2, auto);
            grid-template-areas: "socialDiscaimer socialDiscaimer"
            "socialLinks socialNetworks";
          }
          .social__disclaimer > p {
            white-space: nowrap;
          }
        }
        @media only screen and (min-width: 1025px) {
          .footer__upper {
            grid-template-columns: 1fr min-content 1fr;
            grid-template-rows: auto auto;
            grid-template-areas: "footerFutured footerFutured footerFutured" 
            "footerText footerAward footerBenefits";
          }
          .upper__footer-text {
            max-width: 530px;
          }
          .footer__links a {
            font-size: 16px;
          }
        }
        @media only screen and (min-width: 1275px) {
          .footer__social {
            grid-template-columns: auto auto auto;
            grid-template-rows: 100%;
            grid-template-areas: "socialDiscaimer socialLinks socialNetworks";
          }
        }
      </style>
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__upper">
            <div class="upper__footer-futured">
              <h2>AS FUTURED IN</h2>
              <div class="footer-futured__logos">
                <img src="assets/images/laweekly.png" alt="">
                <img src="assets/images/the_huffingston_post.png" alt="">
                <img src="assets/images/the_washington_post.png" alt="">
                <img src="assets/images/the_guardian.png" alt="">
                <img src="assets/images/daily_news.png" alt="">
                <img src="assets/images/daily_beast.png" alt="">
                <img src="assets/images/forbes.png" alt="">
                <img src="assets/images/esquire.png" alt="">
                <img src="assets/images/maxim.png" alt="">
                <img src="assets/images/the_sun.png" alt="">
                <img src="assets/images/vice.png" alt="">
              </div>
            </div>
            <div class="upper__footer-text">
              <h3>any title  any title</h3>
              <p>Today we have a roster of 3 new girls that are new to LBG so please welcome Alisa, Lina & Marsianna, they are meeting up for a game of strip darts, the rules are plain, each time you lose a round you lose and article of clothing, and the loser will have to masturbate in front of the others :) Who would you place your bets Today we have a roster of 3 new girls that are new to LBG so please welcome Alisa, Lina & Marsianna, they are meeting up for a game of strip darts, the rules are plain, each time you lose a round you lose and article.</p>
            </div>
            <div class="upper__footer-benefits">
              <h4>member benefits</h4>
              <ul>
                <li>Weekly uploads of the world's kinkiest girls</li>
                <li>Full 4K content</li>
                <li>Watch on any device</li>
                <li>Shot from 100% pure POV</li>
                <li>Tiny Teens & Busty Babes</li>
                <li>The girls always finish job!</li>
                <li>Mouth, Pussy & Anal</li>
                <li>Fast Customer Support</li>
              </ul>
            </div>
            <div class="upper__footer-award">
              <img src="assets/images/award.png" alt="">
              <a class="btn btn--pink join-now-button">JOIN NOW</a>
            </div>
          </div>
          <div class="footer__lower">
            <div class="footer__navigation-container">
              <ul class="footer__links">
                <li><a href="index.html">
                  <svg width="21" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939731 12.7086L8.88016 20.6362C9.27014 21.0256 9.90325 21.0256 10.2942 20.6362C10.6842 20.2459 10.6842 19.6139 10.2942 19.2236L3.85331 12.7944C3.53832 12.48 3.76133 11.9429 4.20731 11.9429L18.9998 11.9429C19.5518 11.9429 19.9998 11.4877 19.9998 10.9356L19.9998 10.9326C19.9998 10.3805 19.5518 9.94625 18.9998 9.94625L4.20731 9.94625C3.76133 9.94625 3.53832 9.40816 3.85331 9.09369L10.325 2.6326C10.716 2.24325 10.716 1.61032 10.325 1.22098C9.93501 0.830637 9.30139 0.830637 8.91141 1.22098L0.585727 9.53195C-0.195243 10.3116 -0.195243 11.5755 0.585727 12.3552L0.939731 12.7086Z" fill="currentColor"/>
                  </svg>
                  HOME</a></li>
                <li><a href="index.html">
                  <svg width="21" height="21" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.25 26.5H17.75C24 26.5 26.5 24 26.5 17.75V10.25C26.5 4 24 1.5 17.75 1.5H10.25C4 1.5 1.5 4 1.5 10.25V17.75C1.5 24 4 26.5 10.25 26.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M16.0706 13.9999L14.4737 14.923L12.8776 15.8458C12.8771 15.8461 12.8766 15.8464 12.8761 15.8467C12.8757 15.8469 12.8754 15.8471 12.875 15.8473V13.9999V12.1524C12.8753 12.1526 12.8756 12.1528 12.876 12.153C12.8765 12.1533 12.877 12.1536 12.8776 12.1539L14.4737 13.0767L14.4737 13.0767L16.0706 13.9999Z" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  VIDEOS</a></li>
                <li><a href="index.html#about">
                  <svg width="21" height="21" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 6.617 24.921 L 6.617 24.921 C 6.105 25.18 5.46 24.722 5.618 24.083 L 7.06 18.236 L 7.06 18.236 C 7.276 17.36 7.049 16.43 6.449 15.754 C 6.449 15.754 6.449 15.754 6.449 15.754 L 1.689 10.393 L 1.689 10.393 C 1.274 9.925 1.59 9.212 2.158 9.167 L 8.798 8.65 C 9.789 8.572 10.652 7.956 11.058 7.051 L 11.069 7.037 L 11.058 7.051 L 13.357 1.925 C 13.357 1.925 13.357 1.925 13.357 1.925 C 13.611 1.358 14.39 1.358 14.644 1.925 C 14.644 1.925 14.644 1.925 14.644 1.925 L 16.942 7.051 C 17.348 7.956 18.211 8.572 19.202 8.65 L 25.842 9.167 C 26.41 9.212 26.726 9.925 26.311 10.393 L 26.311 10.393 L 21.551 15.754 C 21.551 15.754 21.551 15.754 21.551 15.754 C 20.951 16.43 20.724 17.36 20.94 18.236 L 22.382 24.083 C 22.54 24.722 21.895 25.18 21.383 24.921 L 15.217 21.795 C 14.451 21.407 13.549 21.407 12.784 21.795 L 6.617 24.921 Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
                  </svg>
                BONUS</a></li>
                <li><a href="index.html#services">
                  <svg width="21" height="21" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.8002 21.2998L20.2002 23.4998C21.6002 24.6998 20.7002 26.9998 18.9002 26.9998H5.20023C3.40023 26.9998 2.50023 24.7998 3.90023 23.4998L6.30023 21.2998" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                LIFE GIRLS</a></li>
                <li><a href="index.html#contact">
                  <svg width="21" height="21" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.667 3.33317V24.6665H3.33366V3.33317H24.667ZM26.0003 0.666504H2.00033C1.6467 0.666504 1.30756 0.80698 1.05752 1.05703C0.807468 1.30708 0.666992 1.64622 0.666992 1.99984V25.9998C0.666992 26.3535 0.807468 26.6926 1.05752 26.9426C1.30756 27.1927 1.6467 27.3332 2.00033 27.3332H26.0003C26.3539 27.3332 26.6931 27.1927 26.9431 26.9426C27.1932 26.6926 27.3337 26.3535 27.3337 25.9998V1.99984C27.3337 1.64622 27.1932 1.30708 26.9431 1.05703C26.6931 0.80698 26.3539 0.666504 26.0003 0.666504Z" fill="currentColor"/>
                    <path d="M20.6667 18H7.33333C6.97971 18 6.64057 18.1405 6.39052 18.3905C6.14048 18.6406 6 18.9797 6 19.3333C6 19.687 6.14048 20.0261 6.39052 20.2761C6.64057 20.5262 6.97971 20.6667 7.33333 20.6667H20.6667C21.0203 20.6667 21.3594 20.5262 21.6095 20.2761C21.8595 20.0261 22 19.687 22 19.3333C22 18.9797 21.8595 18.6406 21.6095 18.3905C21.3594 18.1405 21.0203 18 20.6667 18Z" fill="currentColor"/>
                    <path d="M20.6673 12.6665H16.6673C16.3137 12.6665 15.9746 12.807 15.7245 13.057C15.4745 13.3071 15.334 13.6462 15.334 13.9998C15.334 14.3535 15.4745 14.6926 15.7245 14.9426C15.9746 15.1927 16.3137 15.3332 16.6673 15.3332H20.6673C21.0209 15.3332 21.3601 15.1927 21.6101 14.9426C21.8602 14.6926 22.0007 14.3535 22.0007 13.9998C22.0007 13.6462 21.8602 13.3071 21.6101 13.057C21.3601 12.807 21.0209 12.6665 20.6673 12.6665Z" fill="currentColor"/>
                    <path d="M20.6673 7.33301H16.6673C16.3137 7.33301 15.9746 7.47348 15.7245 7.72353C15.4745 7.97358 15.334 8.31272 15.334 8.66634C15.334 9.01996 15.4745 9.3591 15.7245 9.60915C15.9746 9.8592 16.3137 9.99967 16.6673 9.99967H20.6673C21.0209 9.99967 21.3601 9.8592 21.6101 9.60915C21.8602 9.3591 22.0007 9.01996 22.0007 8.66634C22.0007 8.31272 21.8602 7.97358 21.6101 7.72353C21.3601 7.47348 21.0209 7.33301 20.6673 7.33301Z" fill="currentColor"/>
                    <path d="M11.3333 7.33301H7.33333C6.59695 7.33301 6 7.92996 6 8.66634V13.9997C6 14.7361 6.59695 15.333 7.33333 15.333H11.3333C12.0697 15.333 12.6667 14.7361 12.6667 13.9997V8.66634C12.6667 7.92996 12.0697 7.33301 11.3333 7.33301Z" fill="currentColor"/>
                  </svg>
                NEWS</a></li>
                <li><a href="index.html">
                  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5381 3.28662L11.7839 9.74285L3.02967 3.28662" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.1244 1.42627H19.4443C20.653 1.42627 21.6328 2.40612 21.6328 3.61482V14.5576C21.6328 15.7663 20.653 16.7461 19.4443 16.7461H4.1244C2.91569 16.7461 1.93584 15.7663 1.93584 14.5576V3.61482C1.93584 2.40612 2.91569 1.42627 4.1244 1.42627Z" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
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
                <a href="" class="btn btn--yellow btn--mobile-xs">
                  <div class="icon-container">
                    <svg width="20" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2_1192)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4375 13.4203C15.473 12.065 16.0953 10.3804 16.0953 8.54767C16.0953 4.10964 12.4857 0.5 8.04767 0.5C3.60964 0.5 0 4.10964 0 8.54767C0 12.9857 3.60964 16.5953 8.04767 16.5953C9.88039 16.5953 11.5661 15.973 12.9213 14.9375L17.4827 19.5L19 17.9827L14.4375 13.4203ZM8.04767 14.4493C4.79319 14.4493 2.14604 11.8011 2.14604 8.54767C2.14604 5.29426 4.79319 2.64604 8.04767 2.64604C11.3021 2.64604 13.9493 5.29426 13.9493 8.54767C13.9493 11.8011 11.3021 14.4493 8.04767 14.4493Z" fill="currentColor"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_2_1192">
                      <rect width="19" height="19" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>MODELS WANTED</p>
                </a>
                <a href="" class="btn btn--yellow btn--mobile-xs">
                  <div class="icon-container">
                    <svg width="20" height="20" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.7344 0.428223C19.9022 1.20072 18.9013 1.80822 17.7922 2.19522C16.6352 2.39322 13.4331 0.953222 11.8553 2.42322C11.5923 2.67822 11.2675 2.93322 10.9272 3.18822C10.1847 2.87322 9.04 2.39322 8.20469 1.92822C7.36938 1.46322 5.26562 0.428223 5.26562 0.428223L0.625 5.67822C0.625 5.67822 1.76969 7.17822 2.48125 8.16822C2.94531 8.82822 3.51766 9.83322 3.88891 10.5082L3.36297 11.1082C3.27325 11.2807 3.21911 11.4832 3.21911 11.6977C3.21911 12.0502 3.36142 12.3712 3.595 12.6082C3.80847 12.7627 4.07608 12.8557 4.36844 12.8557C4.6608 12.8557 4.92841 12.7627 5.14497 12.6052C4.99956 12.7687 4.91448 12.9787 4.91448 13.2082C4.91448 13.4977 5.05061 13.7557 5.26408 13.9267C5.48683 14.0542 5.75444 14.1292 6.03906 14.1292C6.32369 14.1292 6.5913 14.0542 6.82023 13.9237C6.64698 14.1322 6.54644 14.3932 6.54644 14.6782C6.54644 14.9632 6.64698 15.2242 6.81559 15.4312C6.96873 15.4837 7.14663 15.5152 7.33225 15.5152C7.65245 15.5152 7.94945 15.4207 8.19541 15.2602C8.12889 15.4027 8.09486 15.5647 8.09486 15.7357C8.09486 16.0867 8.24336 16.4032 8.48467 16.6282C8.68577 16.7167 8.92244 16.7677 9.16994 16.7677C9.51953 16.7677 9.84592 16.6657 10.1151 16.4902L10.9133 15.7897C11.6434 16.4947 12.6504 16.9312 13.7626 16.9312C13.7935 16.9312 13.826 16.9312 13.857 16.9297C14.6211 16.8667 15.2615 16.3957 15.5492 15.7432C15.7751 15.8272 16.0319 15.8842 16.3041 15.8842C16.6692 15.8842 17.008 15.7822 17.2941 15.6067C18.199 15.0262 17.9825 14.5762 17.9825 14.5762C18.1758 14.6587 18.4001 14.7067 18.6368 14.7067C19.1334 14.7067 19.5804 14.4937 19.8836 14.1577C20.1558 13.8862 20.3214 13.5172 20.3214 13.1122C20.3214 12.8272 20.2394 12.5617 20.0971 12.3352C20.1094 12.3427 20.1203 12.3427 20.1295 12.3427C20.7808 12.3427 21.3469 11.9947 21.6424 11.4817C21.7476 11.2252 21.8048 10.9372 21.8048 10.6372C21.8048 10.1242 21.6347 9.64872 21.3469 9.26172L21.3516 9.26922C22.62 9.02922 22.5736 8.41422 23.1924 7.51422C23.7864 6.77322 24.5103 6.16122 25.3379 5.70222L20.7344 0.428223ZM20.657 11.0182C19.9764 11.6782 19.4505 11.3932 18.2903 10.5382C17.1302 9.68322 14.8253 8.07822 14.8253 8.07822C14.9197 8.53572 15.1378 8.93322 15.4456 9.24972C15.9391 9.78822 17.4086 11.0182 18.1047 11.6482C18.5378 12.0382 19.6516 12.8182 19.0019 13.4182C18.3522 14.0182 17.8417 13.4182 16.7744 12.5782C15.707 11.7382 13.3248 9.66822 13.3248 9.66822C13.3233 9.69522 13.3218 9.72522 13.3218 9.75672C13.3218 10.1437 13.4826 10.4932 13.7425 10.7482C14.0055 11.0482 15.475 12.4282 16.0938 13.0582C16.7125 13.6882 17.2539 14.0632 16.728 14.5582C16.202 15.0532 15.1347 14.2732 14.5469 13.6882C13.6342 12.8332 11.8244 11.2432 11.8244 11.2432C11.8228 11.2672 11.8228 11.2942 11.8228 11.3227C11.8228 11.7487 11.9744 12.1387 12.2297 12.4477C12.6752 13.0147 13.5414 13.7497 14.0673 14.3197C14.5933 14.8897 14.9027 15.3697 14.0673 15.8197C13.232 16.2697 11.9945 15.1597 11.4531 14.6197V14.6167C11.4531 14.4622 11.3943 14.3212 11.2984 14.2132C11.0525 13.9927 10.7199 13.8562 10.3564 13.8562C10.1955 13.8562 10.0408 13.8832 9.89697 13.9312C10.095 13.7602 10.2125 13.5202 10.2125 13.2532C10.2125 12.9862 10.095 12.7462 9.90625 12.5782C9.71134 12.4357 9.46694 12.3502 9.20242 12.3502C8.93791 12.3502 8.69195 12.4357 8.4955 12.5797C8.67648 12.4102 8.78786 12.1777 8.78786 11.9182C8.78786 11.5987 8.61925 11.3182 8.36402 11.1547C8.12734 11.0092 7.84427 10.9252 7.54108 10.9252C7.16364 10.9252 6.81714 11.0572 6.54798 11.2747C6.69494 11.1037 6.78156 10.8847 6.78156 10.6447C6.78156 10.3522 6.65008 10.0897 6.4428 9.90822C6.16745 9.66072 5.79775 9.50922 5.39247 9.50922C5.1063 9.50922 4.83869 9.58422 4.6082 9.71622L3.57953 8.03172C2.86797 6.93672 2.03266 5.79672 2.03266 5.79672L5.55953 1.64172C5.55953 1.64172 6.8125 2.39172 7.84891 2.96172C8.35938 3.24672 9.24109 3.62172 9.90625 3.92172C8.85437 4.68672 7.97266 5.42172 8.23563 5.93172C8.69505 6.25272 9.26894 6.44622 9.88923 6.44622C10.4709 6.44622 11.0123 6.27672 11.464 5.98572C12.0409 5.60922 12.7633 5.38122 13.5414 5.38122C14.0782 5.38122 14.5886 5.48922 15.0512 5.68572C15.9081 6.24672 17.4859 7.62672 18.9245 8.49672C20.7344 9.77172 21.0902 10.5967 20.657 11.0167V11.0182Z" fill="currentColor"/>
                    </svg>                  
                  </div>
                  <p>WEBMASTERS</p></a>
              </div>
              <div class="social__networks">
                <p><b>Follow Us:</b></p>
                <div class="icon-container">
                  <svg width="31" height="31" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09797 1.11845C6.57475 1.2323 4.38776 1.8492 2.62182 3.60769C0.849702 5.37542 0.240469 7.57107 0.126338 10.068C0.0553914 11.6265 -0.359467 23.4006 0.843535 26.4884C1.65479 28.5715 3.25258 30.1731 5.35475 30.987C6.33566 31.3685 7.45541 31.6268 9.09797 31.7022C22.8322 32.3238 27.9234 31.9854 30.0703 26.4884C30.4512 25.5099 30.7134 24.3911 30.7859 22.7526C31.4136 8.98312 30.6841 5.9985 28.2905 3.60769C26.3919 1.7138 24.1586 0.424595 9.09797 1.11845ZM9.22441 28.9329C7.72065 28.8652 6.90478 28.6147 6.36035 28.4039C4.99078 27.8716 3.96206 26.8471 3.43305 25.4855C2.51692 23.1393 2.82077 11.996 2.90251 10.1929C2.98271 8.42672 3.34052 6.81255 4.5867 5.56638C6.12901 4.02788 8.12166 3.27387 21.6894 3.8862C23.4599 3.9662 25.0778 4.32328 26.3271 5.56638C27.8694 7.10486 28.6344 9.11285 28.0113 22.6285C27.9434 24.1285 27.6921 24.9425 27.4808 25.4855C26.085 29.0625 22.8738 29.5591 9.22441 28.9329ZM21.839 8.19714C21.839 9.21563 22.6672 10.0438 23.6898 10.0438C24.7123 10.0438 25.5421 9.21563 25.5421 8.19714C25.5421 7.17867 24.7123 6.35122 23.6898 6.35122C22.6672 6.35122 21.839 7.17867 21.839 8.19714ZM7.53713 16.4096C7.53713 20.7727 11.0829 24.3102 15.4569 24.3102C19.8309 24.3102 23.3767 20.7727 23.3767 16.4096C23.3767 12.0464 19.8309 8.51123 15.4569 8.51123C11.0829 8.51123 7.53713 12.0464 7.53713 16.4096ZM10.3164 16.4096C10.3164 13.5788 12.6175 11.282 15.4569 11.282C18.2963 11.282 20.5974 13.5788 20.5974 16.4096C20.5974 19.2419 18.2963 21.5394 15.4569 21.5394C12.6175 21.5394 10.3164 19.2419 10.3164 16.4096Z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="icon-container">
                  <svg width="31" height="31" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9366 2.78845C26.898 2.78845 29.1234 3.56728 30.3705 4.86452C31.921 4.5635 33.3842 4.01283 34.6994 3.24953C34.1917 4.8036 33.1083 6.10801 31.7012 6.93223C33.0784 6.76858 34.3972 6.41381 35.6192 5.88225C34.7042 7.21653 33.5491 8.39074 32.216 9.33082C32.228 9.61512 32.2351 9.9018 32.2351 10.1885C32.2351 18.9885 25.6151 29.0678 13.0655 29.0678C9.21437 29.0678 5.38235 28.0322 2.3662 26.1425C2.89895 26.207 3.44246 26.238 3.99194 26.238C7.18847 26.238 10.1306 25.1737 12.4682 23.3843C9.47955 23.333 6.95912 21.4062 6.09429 18.7627C6.50879 18.8392 6.93881 18.8822 7.37839 18.8822C7.99715 18.8822 8.60277 18.8022 9.17375 18.6481C6.05248 18.0401 3.70167 15.3476 3.70167 12.1212C3.70167 12.0902 3.70167 12.0627 3.70167 12.034C4.62264 12.5333 5.67262 12.8343 6.79189 12.8702C4.96069 11.6721 3.75781 9.63781 3.75781 7.32642C3.75781 6.10563 4.09347 4.96008 4.67998 3.98058C8.04374 8.00491 13.0727 10.6579 18.7442 10.9375C18.626 10.4501 18.5651 9.93644 18.5651 9.42161C18.5651 5.74249 21.1667 2.78845 24.9366 2.78845ZM35.6192 5.88225H35.6252H35.6192ZM24.9366 0.399414C20.3449 0.399414 16.7936 3.68792 16.2608 8.22589C12.4515 7.45304 8.98622 5.42117 6.49684 2.44323C6.04412 1.90092 5.37758 1.59154 4.67998 1.59154C4.61786 1.59154 4.55575 1.59393 4.49363 1.59871C3.72914 1.65963 3.0411 2.08727 2.64571 2.74784C1.8203 4.1287 1.38311 5.71143 1.38311 7.32642C1.38311 8.40268 1.57662 9.45266 1.93975 10.4334C1.55154 10.8658 1.32816 11.4344 1.32816 12.034V12.1212C1.32816 14.4613 2.24675 16.6317 3.77334 18.2598C3.68614 18.6684 3.70525 19.0996 3.83904 19.5093C4.36701 21.1219 5.32502 22.5099 6.56732 23.5683C5.73235 23.7546 4.8711 23.849 3.99194 23.849C3.52727 23.849 3.07693 23.8227 2.65288 23.7702C2.55612 23.7594 2.46056 23.7534 2.365 23.7534C1.36997 23.7534 0.465719 24.3829 0.12767 25.3481C-0.24263 26.4041 0.165895 27.5783 1.11195 28.1708C4.49483 30.2898 8.74014 31.4569 13.0655 31.4569C21.2348 31.4569 26.3079 27.6858 29.1246 24.5227C32.5409 20.6871 34.5286 15.5913 34.6062 10.4991C35.7136 9.5757 36.6907 8.51019 37.5185 7.31806C37.8183 6.91909 37.9963 6.42098 37.9963 5.88225C37.9963 5.06878 37.5937 4.35088 36.9785 3.91846C37.2449 2.99869 36.9391 2.00246 36.1961 1.39445C35.7625 1.04087 35.2322 0.860498 34.6982 0.860498C34.2909 0.860498 33.8812 0.965616 33.5121 1.18063C32.7177 1.64171 31.8684 2.00485 30.9737 2.26525C29.33 1.10657 27.0999 0.399414 24.9366 0.399414Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="footer__rights">
              <p>18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement</p>
              <p>All images, videos and design are strictly copyright protected.</p>
              <p>Copyright @ lostbetsgames.com. All rights reserved.</p>
            </div>
            <div class="footer__partners">
              <img src="assets/images/visa.png" alt="" />
              <img src="assets/images/mastercard.png" alt="" />
              <img src="assets/images/asacp.png" alt="" />
              <img src="assets/images/rta.png" alt="" />
            </div>
          </div> 
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-block', footerBlock);
