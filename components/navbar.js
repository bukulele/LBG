class navBar extends HTMLElement {
  constructor() {
    super();
    this.userAuthorized = true;
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .navbar {
        position: fixed;
        top: 0;
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
        width: auto;
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
        min-width: 150px;
        width: 100%;
        border-radius: 6px;
        color: #fff;
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
        .navbar__container {
          padding: 10px;
        }
        .navbar__user-buttons {
          gap: 20px;
        }
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
          max-width: 300px;
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
      
      @media only screen and (min-width: 1275px) {
        .navbar__container {
          padding: 10px 20px;
        }
        
        .navbar__logo {
          min-width: 273px;
        }
        .navbar__search {
          max-width: 394px;
        }
      }
      
      @media only screen and (min-width: 1290px) {
        .navbar__links-container,
        .navbar__links {
          gap: 43px;
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
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 26.5H17.75C24 26.5 26.5 24 26.5 17.75V10.25C26.5 4 24 1.5 17.75 1.5H10.25C4 1.5 1.5 4 1.5 10.25V17.75C1.5 24 4 26.5 10.25 26.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M16.0706 13.9999L14.4737 14.923L12.8776 15.8458C12.8771 15.8461 12.8766 15.8464 12.8761 15.8467C12.8757 15.8469 12.8754 15.8471 12.875 15.8473V13.9999V12.1524C12.8753 12.1526 12.8756 12.1528 12.876 12.153C12.8765 12.1533 12.877 12.1536 12.8776 12.1539L14.4737 13.0767L14.4737 13.0767L16.0706 13.9999Z" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              VIDEOS</a></li>
            <li><a href="index.html#about">
              <svg width="28" height="28" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 6.617 24.921 L 6.617 24.921 C 6.105 25.18 5.46 24.722 5.618 24.083 L 7.06 18.236 L 7.06 18.236 C 7.276 17.36 7.049 16.43 6.449 15.754 C 6.449 15.754 6.449 15.754 6.449 15.754 L 1.689 10.393 L 1.689 10.393 C 1.274 9.925 1.59 9.212 2.158 9.167 L 8.798 8.65 C 9.789 8.572 10.652 7.956 11.058 7.051 L 11.069 7.037 L 11.058 7.051 L 13.357 1.925 C 13.357 1.925 13.357 1.925 13.357 1.925 C 13.611 1.358 14.39 1.358 14.644 1.925 C 14.644 1.925 14.644 1.925 14.644 1.925 L 16.942 7.051 C 17.348 7.956 18.211 8.572 19.202 8.65 L 25.842 9.167 C 26.41 9.212 26.726 9.925 26.311 10.393 L 26.311 10.393 L 21.551 15.754 C 21.551 15.754 21.551 15.754 21.551 15.754 C 20.951 16.43 20.724 17.36 20.94 18.236 L 22.382 24.083 C 22.54 24.722 21.895 25.18 21.383 24.921 L 15.217 21.795 C 14.451 21.407 13.549 21.407 12.784 21.795 L 6.617 24.921 Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
              </svg>
            BONUS</a></li>
            <li><a href="index.html#services">
              <svg width="28" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.8002 21.2998L20.2002 23.4998C21.6002 24.6998 20.7002 26.9998 18.9002 26.9998H5.20023C3.40023 26.9998 2.50023 24.7998 3.90023 23.4998L6.30023 21.2998" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            LIFE GIRLS</a></li>
            <li><a href="index.html#contact">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.667 3.33317V24.6665H3.33366V3.33317H24.667ZM26.0003 0.666504H2.00033C1.6467 0.666504 1.30756 0.80698 1.05752 1.05703C0.807468 1.30708 0.666992 1.64622 0.666992 1.99984V25.9998C0.666992 26.3535 0.807468 26.6926 1.05752 26.9426C1.30756 27.1927 1.6467 27.3332 2.00033 27.3332H26.0003C26.3539 27.3332 26.6931 27.1927 26.9431 26.9426C27.1932 26.6926 27.3337 26.3535 27.3337 25.9998V1.99984C27.3337 1.64622 27.1932 1.30708 26.9431 1.05703C26.6931 0.80698 26.3539 0.666504 26.0003 0.666504Z" fill="currentColor"/>
              <path d="M20.6667 18H7.33333C6.97971 18 6.64057 18.1405 6.39052 18.3905C6.14048 18.6406 6 18.9797 6 19.3333C6 19.687 6.14048 20.0261 6.39052 20.2761C6.64057 20.5262 6.97971 20.6667 7.33333 20.6667H20.6667C21.0203 20.6667 21.3594 20.5262 21.6095 20.2761C21.8595 20.0261 22 19.687 22 19.3333C22 18.9797 21.8595 18.6406 21.6095 18.3905C21.3594 18.1405 21.0203 18 20.6667 18Z" fill="currentColor"/>
              <path d="M20.6673 12.6665H16.6673C16.3137 12.6665 15.9746 12.807 15.7245 13.057C15.4745 13.3071 15.334 13.6462 15.334 13.9998C15.334 14.3535 15.4745 14.6926 15.7245 14.9426C15.9746 15.1927 16.3137 15.3332 16.6673 15.3332H20.6673C21.0209 15.3332 21.3601 15.1927 21.6101 14.9426C21.8602 14.6926 22.0007 14.3535 22.0007 13.9998C22.0007 13.6462 21.8602 13.3071 21.6101 13.057C21.3601 12.807 21.0209 12.6665 20.6673 12.6665Z" fill="currentColor"/>
              <path d="M20.6673 7.33301H16.6673C16.3137 7.33301 15.9746 7.47348 15.7245 7.72353C15.4745 7.97358 15.334 8.31272 15.334 8.66634C15.334 9.01996 15.4745 9.3591 15.7245 9.60915C15.9746 9.8592 16.3137 9.99967 16.6673 9.99967H20.6673C21.0209 9.99967 21.3601 9.8592 21.6101 9.60915C21.8602 9.3591 22.0007 9.01996 22.0007 8.66634C22.0007 8.31272 21.8602 7.97358 21.6101 7.72353C21.3601 7.47348 21.0209 7.33301 20.6673 7.33301Z" fill="currentColor"/>
              <path d="M11.3333 7.33301H7.33333C6.59695 7.33301 6 7.92996 6 8.66634V13.9997C6 14.7361 6.59695 15.333 7.33333 15.333H11.3333C12.0697 15.333 12.6667 14.7361 12.6667 13.9997V8.66634C12.6667 7.92996 12.0697 7.33301 11.3333 7.33301Z" fill="currentColor"/>
            </svg>
            NEWS</a></li>
          </ul>
          <div class="links-container__user-buttons">
            ${this.userAuthorized ? `
            <button id="memberButtonSide" class="btn btn--yellow">
              <p>Member</p>
              <div class="user-buttons__chevron">
                <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.12285L0.983755 0.150098L7.00918 5.93296L7.65184 5.31636L7.6483 5.31943L13.0014 0.181201L14 1.13994C12.5205 2.56009 8.38983 6.52485 7.00918 7.8501C5.98305 6.86582 6.98305 7.82569 0 1.12285Z" fill="black"/>
                </svg>              
              </div>
            </button>
            ` : `
              <a class="btn btn--pink join-now-button">JOIN NOW</a>
              <a href="" class="log-in-button">LOG IN</a>
            `}
          </div>
          <ul class="links-container__member-links links-container__member-links--hidden">
            <li><a href="index.html">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4232 15.675H2.99408C2.37893 15.675 1.92468 15.068 2.15669 14.5098C3.2332 11.9287 5.76225 10.45 8.70821 10.45C11.6551 10.45 14.1841 11.9287 15.2606 14.5098C15.4926 15.068 15.0384 15.675 14.4232 15.675ZM5.15243 5.22499C5.15243 3.30393 6.74809 1.74165 8.70821 1.74165C10.6692 1.74165 12.264 3.30393 12.264 5.22499C12.264 7.14605 10.6692 8.70833 8.70821 8.70833C6.74809 8.70833 5.15243 7.14605 5.15243 5.22499ZM17.3781 15.358C16.7318 12.4329 14.7104 10.2741 12.0498 9.29438C13.4596 8.18232 14.2819 6.38402 13.9796 4.41507C13.6294 2.13087 11.6897 0.30303 9.34825 0.0365549C6.11605 -0.331808 3.37454 2.13266 3.37454 5.22499C3.37454 6.87087 4.15326 8.33733 5.36756 9.29438C2.70606 10.2741 0.685489 12.4329 0.0383376 15.358C-0.196344 16.4213 0.678378 17.4167 1.78867 17.4167H15.6277C16.7389 17.4167 17.6137 16.4213 17.3781 15.358Z" fill="currentColor"/>
              </svg>
              PROFILE</a></li>
            <li><a href="index.html#about">
              <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 3.49982L1.75 5.08753V1.91211L4.5 3.49982Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M1.75 9H18.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.16699 3.5H18.2503" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.75 14.5H18.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            PLAYLISTS</a></li>
            <li><a href="index.html#services">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 26.5H17.75C24 26.5 26.5 24 26.5 17.75V10.25C26.5 4 24 1.5 17.75 1.5H10.25C4 1.5 1.5 4 1.5 10.25V17.75C1.5 24 4 26.5 10.25 26.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M16.0706 13.9999L14.4737 14.923L12.8776 15.8458C12.8771 15.8461 12.8766 15.8464 12.8761 15.8467C12.8757 15.8469 12.8754 15.8471 12.875 15.8473V13.9999V12.1524C12.8753 12.1526 12.8756 12.1528 12.876 12.153C12.8765 12.1533 12.877 12.1536 12.8776 12.1539L14.4737 13.0767L14.4737 13.0767L16.0706 13.9999Z" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            FAVORITE VIDEOS (333)</a></li>
            <li><a href="index.html#contact">
              <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0003 18.25L12.3295 17.0631C17.0503 12.8639 20.167 10.0944 20.167 6.6955C20.167 3.92602 17.9487 1.75 15.1253 1.75C13.5303 1.75 11.9995 2.47834 11.0003 3.62929C10.0012 2.47834 8.47033 1.75 6.87533 1.75C4.05199 1.75 1.83366 3.92602 1.83366 6.6955C1.83366 10.0944 4.95033 12.8639 9.67116 17.0721L11.0003 18.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            FAVORITE MODELS (1837)</a></li>
            <li><a href="index.html#services">
              <svg width="20" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2012 7.48669L9.45186 0.748206C9.12038 0.417264 8.58224 0.417264 8.24991 0.748206C7.91842 1.08 7.91842 1.61714 8.24991 1.94893L13.7247 7.41371C13.9924 7.68101 13.8029 8.13754 13.4238 8.13754L0.850176 8.13754C0.380993 8.13754 0.000175125 8.52448 0.000175105 8.99374L0.000175105 8.99629C0.000175084 9.46554 0.380992 9.83467 0.850175 9.83467L13.4238 9.83467C13.8029 9.83467 13.9924 10.2921 13.7247 10.5593L8.22376 16.0513C7.89142 16.3822 7.89142 16.9202 8.22376 17.2512C8.55524 17.5829 9.09382 17.5829 9.4253 17.2512L16.5021 10.1868C17.166 9.5241 17.166 8.44981 16.5021 7.78708L16.2012 7.48669Z" fill="currentColor"/>
              </svg>
            LOG OUT</a></li>
          </ul>
          <div class="navbar__search">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7566 17.6804C21.1735 15.8258 22.0252 13.5205 22.0252 11.0126C22.0252 4.93951 17.0857 0 11.0126 0C4.93951 0 0 4.93951 0 11.0126C0 17.0857 4.93951 22.0252 11.0126 22.0252C13.5205 22.0252 15.8273 21.1735 17.6818 19.7566L23.9238 26L26 23.9238L19.7566 17.6804ZM11.0126 19.0885C6.5591 19.0885 2.93669 15.4646 2.93669 11.0126C2.93669 6.56057 6.5591 2.93669 11.0126 2.93669C15.4661 2.93669 19.0885 6.56057 19.0885 11.0126C19.0885 15.4646 15.4661 19.0885 11.0126 19.0885Z" fill="currentColor"/>
            </svg>
            <input type="text" placeholder="SEARCH" />
          </div>
        </div>
        <div class="navbar__user-buttons">
          ${this.userAuthorized ? `
          <button id="memberButton" class="btn btn--yellow">
            <p>Member</p>
            <div class="user-buttons__chevron">
              <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.12285L0.983755 0.150098L7.00918 5.93296L7.65184 5.31636L7.6483 5.31943L13.0014 0.181201L14 1.13994C12.5205 2.56009 8.38983 6.52485 7.00918 7.8501C5.98305 6.86582 6.98305 7.82569 0 1.12285Z" fill="black"/>
              </svg>
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
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4232 15.675H2.99408C2.37893 15.675 1.92468 15.068 2.15669 14.5098C3.2332 11.9287 5.76225 10.45 8.70821 10.45C11.6551 10.45 14.1841 11.9287 15.2606 14.5098C15.4926 15.068 15.0384 15.675 14.4232 15.675ZM5.15243 5.22499C5.15243 3.30393 6.74809 1.74165 8.70821 1.74165C10.6692 1.74165 12.264 3.30393 12.264 5.22499C12.264 7.14605 10.6692 8.70833 8.70821 8.70833C6.74809 8.70833 5.15243 7.14605 5.15243 5.22499ZM17.3781 15.358C16.7318 12.4329 14.7104 10.2741 12.0498 9.29438C13.4596 8.18232 14.2819 6.38402 13.9796 4.41507C13.6294 2.13087 11.6897 0.30303 9.34825 0.0365549C6.11605 -0.331808 3.37454 2.13266 3.37454 5.22499C3.37454 6.87087 4.15326 8.33733 5.36756 9.29438C2.70606 10.2741 0.685489 12.4329 0.0383376 15.358C-0.196344 16.4213 0.678378 17.4167 1.78867 17.4167H15.6277C16.7389 17.4167 17.6137 16.4213 17.3781 15.358Z" fill="currentColor"/>
          </svg>
            PROFILE</a></li>
          <li><a href="index.html#about">
            <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 3.49982L1.75 5.08753V1.91211L4.5 3.49982Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M1.75 9H18.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.16699 3.5H18.2503" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.75 14.5H18.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          PLAYLISTS</a></li>
          <li><a href="index.html#services">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 26.5H17.75C24 26.5 26.5 24 26.5 17.75V10.25C26.5 4 24 1.5 17.75 1.5H10.25C4 1.5 1.5 4 1.5 10.25V17.75C1.5 24 4 26.5 10.25 26.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M16.0706 13.9999L14.4737 14.923L12.8776 15.8458C12.8771 15.8461 12.8766 15.8464 12.8761 15.8467C12.8757 15.8469 12.8754 15.8471 12.875 15.8473V13.9999V12.1524C12.8753 12.1526 12.8756 12.1528 12.876 12.153C12.8765 12.1533 12.877 12.1536 12.8776 12.1539L14.4737 13.0767L14.4737 13.0767L16.0706 13.9999Z" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          FAVORITE VIDEOS (333)</a></li>
          <li><a href="index.html#contact">
            <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0003 18.25L12.3295 17.0631C17.0503 12.8639 20.167 10.0944 20.167 6.6955C20.167 3.92602 17.9487 1.75 15.1253 1.75C13.5303 1.75 11.9995 2.47834 11.0003 3.62929C10.0012 2.47834 8.47033 1.75 6.87533 1.75C4.05199 1.75 1.83366 3.92602 1.83366 6.6955C1.83366 10.0944 4.95033 12.8639 9.67116 17.0721L11.0003 18.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          FAVORITE MODELS (1837)</a></li>
          <li><a href="index.html#services">
            <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0003 18.25L12.3295 17.0631C17.0503 12.8639 20.167 10.0944 20.167 6.6955C20.167 3.92602 17.9487 1.75 15.1253 1.75C13.5303 1.75 11.9995 2.47834 11.0003 3.62929C10.0012 2.47834 8.47033 1.75 6.87533 1.75C4.05199 1.75 1.83366 3.92602 1.83366 6.6955C1.83366 10.0944 4.95033 12.8639 9.67116 17.0721L11.0003 18.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          LOG OUT</a></li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", navBar);
