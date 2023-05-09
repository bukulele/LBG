class navBar extends HTMLElement {
  constructor() {
    super();
    this.userAuthorized = true;
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .navbar {
        display: block;
        width: 100%;
        height: 70px;
      }
      .navbar__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;;
        position: relative;
        background: linear-gradient(90.01deg, #6C060C -0.4%, #671616 98.74%);
        padding: 10px 20px;
        gap: 20px;
        z-index: 100;
      }
      .navbar a {
        text-decoration: none;
      }
      .navbar__logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .navbar__logo a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .navbar__logo img {
        height: auto;
        max-height: 100%;
        width: 100%;
      }
      .navbar__links-container-wrapper {
        display: block;
        opacity: 0;
        transform: scale(0);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(47, 49, 52, 0.85)
      }
      
      .navbar__links-container-wrapper--show {
        animation-name: show-links-container-wrapper;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
      }
      
      @keyframes show-links-container-wrapper {
        from {
          opacity: 0;
        }
        1% {
          transform: scale(1);
        }
        to {
          opacity: 1;
          transform: scale(1);

        }
      }
      
      .links-container__member-links--hidden {
        /*transform: scaleY(0);*/
        opacity: 0;
        max-height: 0;
      }
      
      .links-container__member-links--show {
        animation-name: show-member-links;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
      
      .links-container__member-links--hide {
        animation-name: hide-member-links;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
      }
      
      @keyframes show-member-links {
        from {
          max-height: 0;
          /*transform: scaleY(0);*/
          opacity: 0;
        }
        50% {
          opacity: 0;
          max-height: 1000px;
          /*transform: scaleY(1);*/
        }
        to {
          opacity: 1;  
          max-height: 1000px;
          /*transform: scaleY(1);        */
        }
      }
      
      @keyframes hide-member-links {
        from {
          max-height: 1000px;
          /*transform: scaleY(0);*/
          opacity: 1;
        }
        50% {
          opacity: 0;
          max-height: 1000px;
          /*transform: scaleY(1);*/
        }
        to {
          opacity: 0;  
          max-height: 0;
          /*transform: scaleY(1);        */
        }
      }
      
      .navbar__links-container {
        height: 100%;
        display: flex;
        overflow-y: auto;
      }
      .navbar__links-container--device-position {
        position: fixed;
        width: 300px;
        right: -300px;
        top: 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 30px;
        transition: all 0.2s ease-in-out;
      }
      .navbar__links-container--background-set {
        background: linear-gradient(0deg, #6C060C, #6C060C), #4E1115;
      }
      .navbar__close {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        padding-bottom: 10px;
      }
      .navbar__close * {
        pointer-events: none;
      }
      .navbar__links,
      .links-container__member-links,
      .member-zone-container__member-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        margin: 0;
        width: 100%;
      }
      .navbar__links li,
      .links-container__member-links li,
      .member-zone-container__member-links li{
        list-style: none;
        display: flex;
        align-items: center;
      }
      .navbar__links a,
      .links-container__member-links a,
      .member-zone-container__member-links a {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 10px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        flex-wrap: nowrap;
        white-space: nowrap;
        width: 100%;
        padding: 15px 0;
      }
      
      .navbar__user-buttons,
      .links-container__user-buttons {
        margin: 15px 0;
        display: flex;
        align-items: center;
        gap: 30px;
      }
      
      .navbar__user-buttons a,
      .links-container__user-buttons a {
        color: #fff;
        font-weight: 700;
        white-space: nowrap;
      } 
      
      .navbar__user-buttons {
        display: flex;
        margin-left: auto;
      }
      
      .navbar__user-buttons .log-in-button {
        display: none;
      }
      .navbar__search {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 24px;
        background-color: #792324;
        padding: 0 18px;
        margin: 15px 0;
        min-height: 50px;
        max-height: 50px;
        width: 100%;
        border-radius: 6px;
      }
      
      .navbar__search input {
        background-color: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        width: 100%;
      }
      .navbar__search input::placeholder {
        color: #AF4349;
        font-size: 16px;
        font-weight: 700;
      }
      .user-buttons__chevron {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
      }
      .navbar__hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 30px;
        height: 23px;        
        cursor: pointer;
        flex-shrink: 0;
      }
      .navbar__hamburger span {
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background-color: #fff;
      }
      
      #memberButton {
        display: none;
      }
      
      #memberButton * {
      pointer-events: none;
      }
      
      .navbar__member-zone-container {
        position: fixed;
        right: 0;
        width: 300px;
        padding: 30px;
        background: linear-gradient(0deg, #6C060C, #6C060C), #4E1115;
        transition: all 0.2s ease-in-out;
      }
      
      .navbar__member-zone-container--hidden {
        top: -100vh;
      }
      
      .navbar__member-zone-container--visible {
        top: 70px;
      }
      
      @media only screen and (min-width: 768px)  {
        #memberButton {
          display: flex;
        }
        
        .navbar {
          height: 90px;
        }
        
        .navbar__user-buttons .log-in-button {
          display: block;
        }
      }
      
      @media only screen and (min-width: 1025px) {
        .navbar__links-container {
          gap: 10px;
        }
        .navbar__links-container--device-position  {
          position: relative;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          right: unset;
          padding: 0;
        }
        .navbar__links-container--background-set {
          background: transparent;
        }
        .navbar__search {
          margin: 0;
          max-width: 394px;
        }
        .navbar__close {
          display: none;
        }
        .navbar__links-container-wrapper {
          display: none;
        }
        .navbar__links {
          flex-direction: row;
          gap: 10px;
          align-items: center;
          justify-content: center;
          width: auto;
        }
        .links-container__member-links {
          display: none;
        }
        .links-container__user-buttons {
          display: none;
        }
        
        .navbar__hamburger {
          display: none;
        }
      }
      
      @media only screen and (min-width: 1250px) {
        .navbar__links-container,
        .navbar__links {
          gap: 43px;
        }
        
        .navbar__logo {
          min-width: 273px;
        }
      }
    </style>
    <nav class="navbar">
      <div class="navbar__container">
        <div class="navbar__logo">
          <a href="index.html">
            <img src="assets/images/LBG_logo.png" alt="logo" />
          </a>
        </div>
        <div class="navbar__links-container-wrapper">
        </div>
        <div class="navbar__links-container navbar__links-container--device-position navbar__links-container--background-set">
          <div class="navbar__close">
            <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.1936 4.1936C4.45145 3.93582 4.80112 3.79102 5.16572 3.79102C5.53032 3.79102 5.88 3.93582 6.13785 4.1936L10.9998 9.0556L15.8618 4.1936C16.1212 3.94313 16.4685 3.80454 16.829 3.80767C17.1895 3.8108 17.5344 3.95541 17.7893 4.21035C18.0443 4.46528 18.1889 4.81015 18.192 5.17067C18.1952 5.53119 18.0566 5.87852 17.8061 6.13785L12.9441 10.9998L17.8061 15.8618C18.0566 16.1212 18.1952 16.4685 18.192 16.829C18.1889 17.1895 18.0443 17.5344 17.7893 17.7893C17.5344 18.0443 17.1895 18.1889 16.829 18.192C16.4685 18.1952 16.1212 18.0566 15.8618 17.8061L10.9998 12.9441L6.13785 17.8061C5.87852 18.0566 5.53119 18.1952 5.17067 18.192C4.81015 18.1889 4.46528 18.0443 4.21035 17.7893C3.95541 17.5344 3.8108 17.1895 3.80767 16.829C3.80454 16.4685 3.94313 16.1212 4.1936 15.8618L9.0556 10.9998L4.1936 6.13785C3.93582 5.88 3.79102 5.53032 3.79102 5.16572C3.79102 4.80112 3.93582 4.45145 4.1936 4.1936Z" fill="white"/>
            </svg>
          </div>
          <ul class="navbar__links">
            <li><a href="index.html">
              <object data="/assets/icons/videos.svg" width="28" height="28"></object>
              VIDEOS</a></li>
            <li><a href="index.html#about">
              <object data="/assets/icons/star.svg" width="28" height="28"></object>  
            BONUS</a></li>
            <li><a href="index.html#services">
              <object data="/assets/icons/camera.svg" width="28" height="28"></object>  
            LIFE GIRLS</a></li>
            <li><a href="index.html#contact">
              <object data="/assets/icons/newspaper.svg" width="28" height="28"></object>  
            NEWS</a></li>
          </ul>
          <div class="links-container__user-buttons">
            ${this.userAuthorized ? `
            <button id="memberButtonSide" class="btn btn--yellow">
              <p>Member</p>
              <div class="user-buttons__chevron">
                <object data="/assets/icons/chevron.svg" width="14" height="14"></object>  
              </div>
            </button>
            ` : `
              <a class="btn btn--pink join-now-button">JOIN NOW</a>
              <a href="" class="log-in-button">LOG IN</a>
            `}
          </div>
          <ul class="links-container__member-links links-container__member-links--hidden">
            <li><a href="index.html">
              <object data="/assets/icons/user.svg" width="20" height="20"></object>  
              PROFILE</a></li>
            <li><a href="index.html#about">
             <object data="/assets/icons/playlist.svg" width="20" height="20"></object>  
            PLAYLISTS</a></li>
            <li><a href="index.html#services">
             <object data="/assets/icons/videos.svg" width="20" height="20"></object>
            FAVORITE VIDEOS (333)</a></li>
            <li><a href="index.html#contact">
             <object data="/assets/icons/heart.svg" width="20" height="20"></object>
            FAVORITE MODELS (1837)</a></li>
            <li><a href="index.html#services">
             <object data="/assets/icons/arrowRight.svg" width="20" height="20"></object>
            LOG OUT</a></li>
          </ul>
          <div class="navbar__search">
           <object data="/assets/icons/search.svg" width="26" height="26"></object>
            <input type="text" placeholder="SEARCH" />
          </div>
        </div>
        <div class="navbar__user-buttons">
          ${this.userAuthorized ? `
          <button id="memberButton" class="btn btn--yellow">
            <p>Member</p>
            <div class="user-buttons__chevron">
                <object data="/assets/icons/chevron.svg" width="14" height="14"></object>  
            </div>
          </button>
          ` : `
            <a href="" class="log-in-button">LOG IN</a>
            <a class="btn btn--mobile-small btn--pink join-now-button">JOIN NOW</a>
          `}
        </div>
        <div class="navbar__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar__member-zone-container navbar__member-zone-container--hidden">
        <ul class="member-zone-container__member-links">
          <li><a href="index.html">
            <object data="/assets/icons/user.svg" width="20" height="20"></object>  
            PROFILE</a></li>
          <li><a href="index.html#about">
           <object data="/assets/icons/playlist.svg" width="20" height="20"></object>  
          PLAYLISTS</a></li>
          <li><a href="index.html#services">
           <object data="/assets/icons/videos.svg" width="20" height="20"></object>
          FAVORITE VIDEOS (333)</a></li>
          <li><a href="index.html#contact">
           <object data="/assets/icons/heart.svg" width="20" height="20"></object>
          FAVORITE MODELS (1837)</a></li>
          <li><a href="index.html#services">
           <object data="/assets/icons/arrowRight.svg" width="20" height="20"></object>
          LOG OUT</a></li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", navBar);
