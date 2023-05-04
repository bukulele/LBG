class navBar extends HTMLElement {
  constructor() {
    super();
    this.userAuthorized = true;
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        background: linear-gradient(90.01deg, #6C060C -0.4%, #671616 98.74%);
        padding: 10px 20px;
        gap: 10px;
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
        height: 100%;
      }
      .navbar__links-container-wrapper {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(47, 49, 52, 0.85);
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
      .navbar__links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        margin: 0;
        width: 100%;
      }
      .navbar__links li {
        list-style: none;
        display: flex;
        align-items: center;
      }
      .navbar__links a {
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
      .navbar__user-buttons {
        margin: 15px 0;
        display: flex;
        align-items: center;
        gap: 30px;
      }
      
      .navbar__user-buttons a {
        color: #fff;
        font-weight: 700;
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
      }
      .navbar__hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 30px;
        height: 23px;        
      }
      .navbar__hamburger span {
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background-color: #fff;
      }
    </style>
    <nav class="navbar">
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
              <path d="M10.25 26.5H17.75C24 26.5 26.5 24 26.5 17.75V10.25C26.5 4 24 1.5 17.75 1.5H10.25C4 1.5 1.5 4 1.5 10.25V17.75C1.5 24 4 26.5 10.25 26.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M16.0706 13.9999L14.4737 14.923L12.8776 15.8458C12.8771 15.8461 12.8766 15.8464 12.8761 15.8467C12.8757 15.8469 12.8754 15.8471 12.875 15.8473V13.9999V12.1524C12.8753 12.1526 12.8756 12.1528 12.876 12.153C12.8765 12.1533 12.877 12.1536 12.8776 12.1539L14.4737 13.0767L14.4737 13.0767L16.0706 13.9999Z" stroke="white" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            VIDEOS</a></li>
          <li><a href="index.html#about">
            <svg width="28" height="28" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.61706 24.9207L6.61705 24.9207C6.10518 25.1801 5.45998 24.7219 5.61768 24.0825L7.05954 18.2362L7.05955 18.2362C7.27569 17.3597 7.04886 16.4295 6.44872 15.7536C6.44872 15.7536 6.44871 15.7536 6.4487 15.7536L1.68903 10.3928L1.68902 10.3928C1.27389 9.92522 1.59026 9.21173 2.15824 9.16744L8.79813 8.6497L8.79813 8.6497C9.78918 8.57241 10.6523 7.9555 11.0577 7.05144L10.1452 6.64228L11.0577 7.05143L13.3565 1.92472C13.3565 1.92471 13.3565 1.92471 13.3565 1.9247C13.6105 1.35843 14.3895 1.35843 14.6435 1.92471C14.6435 1.92471 14.6435 1.92472 14.6435 1.92472L16.9423 7.05134C17.3477 7.95553 18.2109 8.57241 19.2018 8.6497L19.2018 8.6497L25.8417 9.16744C26.4098 9.21174 26.726 9.92529 26.311 10.3927L26.3109 10.3928L21.5513 15.7536C21.5513 15.7536 21.5513 15.7536 21.5513 15.7536C20.9511 16.4295 20.7243 17.3597 20.9404 18.2362L20.9404 18.2362L22.3823 24.0825C22.54 24.7219 21.8948 25.1801 21.383 24.9207L21.383 24.9207L15.2165 21.7953C14.4512 21.4073 13.5488 21.4073 12.7835 21.7953L6.61706 24.9207Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          BONUS</a></li>
          <li><a href="index.html#services">
            <svg width="28" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.8002 21.2998L20.2002 23.4998C21.6002 24.6998 20.7002 26.9998 18.9002 26.9998H5.20023C3.40023 26.9998 2.50023 24.7998 3.90023 23.4998L6.30023 21.2998" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          LIFE GIRLS</a></li>
          <li><a href="index.html#contact">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.668 3.33317V24.6665H3.33464V3.33317H24.668ZM26.0013 0.666504H2.0013C1.64768 0.666504 1.30854 0.80698 1.05849 1.05703C0.808444 1.30708 0.667969 1.64622 0.667969 1.99984V25.9998C0.667969 26.3535 0.808444 26.6926 1.05849 26.9426C1.30854 27.1927 1.64768 27.3332 2.0013 27.3332H26.0013C26.3549 27.3332 26.6941 27.1927 26.9441 26.9426C27.1942 26.6926 27.3346 26.3535 27.3346 25.9998V1.99984C27.3346 1.64622 27.1942 1.30708 26.9441 1.05703C26.6941 0.80698 26.3549 0.666504 26.0013 0.666504Z" fill="white"/>
              <path d="M20.6667 18H7.33333C6.97971 18 6.64057 18.1405 6.39052 18.3905C6.14048 18.6406 6 18.9797 6 19.3333C6 19.687 6.14048 20.0261 6.39052 20.2761C6.64057 20.5262 6.97971 20.6667 7.33333 20.6667H20.6667C21.0203 20.6667 21.3594 20.5262 21.6095 20.2761C21.8595 20.0261 22 19.687 22 19.3333C22 18.9797 21.8595 18.6406 21.6095 18.3905C21.3594 18.1405 21.0203 18 20.6667 18Z" fill="white"/>
              <path d="M20.6693 12.6665H16.6693C16.3156 12.6665 15.9765 12.807 15.7265 13.057C15.4764 13.3071 15.3359 13.6462 15.3359 13.9998C15.3359 14.3535 15.4764 14.6926 15.7265 14.9426C15.9765 15.1927 16.3156 15.3332 16.6693 15.3332H20.6693C21.0229 15.3332 21.362 15.1927 21.6121 14.9426C21.8621 14.6926 22.0026 14.3535 22.0026 13.9998C22.0026 13.6462 21.8621 13.3071 21.6121 13.057C21.362 12.807 21.0229 12.6665 20.6693 12.6665Z" fill="white"/>
              <path d="M20.6693 7.33301H16.6693C16.3156 7.33301 15.9765 7.47348 15.7265 7.72353C15.4764 7.97358 15.3359 8.31272 15.3359 8.66634C15.3359 9.01996 15.4764 9.3591 15.7265 9.60915C15.9765 9.8592 16.3156 9.99967 16.6693 9.99967H20.6693C21.0229 9.99967 21.362 9.8592 21.6121 9.60915C21.8621 9.3591 22.0026 9.01996 22.0026 8.66634C22.0026 8.31272 21.8621 7.97358 21.6121 7.72353C21.362 7.47348 21.0229 7.33301 20.6693 7.33301Z" fill="white"/>
              <path d="M11.3333 7.33301H7.33333C6.59695 7.33301 6 7.92996 6 8.66634V13.9997C6 14.7361 6.59695 15.333 7.33333 15.333H11.3333C12.0697 15.333 12.6667 14.7361 12.6667 13.9997V8.66634C12.6667 7.92996 12.0697 7.33301 11.3333 7.33301Z" fill="white"/>
            </svg>
          NEWS</a></li>
        </ul>
        <div class="navbar__user-buttons">
          ${this.userAuthorized ? `
          <button class="btn btn--yellow">
            <p>Member</p>
            <div class="user-buttons__chevron">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.12285L0.983755 3.1501L7.00918 8.93296L7.65184 8.31636L7.6483 8.31943L13.0014 3.1812L14 4.13994C12.5205 5.56009 8.38983 9.52485 7.00918 10.8501C5.98305 9.86582 6.98305 10.8257 0 4.12285Z" fill="black"/>
              </svg>
            </div>
          </button>
          ` : `
            <a class="btn btn--pink">JOIN NOW</a>
            <a class="">LOG IN</a>
          `}
        </div>
        <ul class="navbar__links">
          <li><a href="index.html">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4232 15.675H2.99408C2.37893 15.675 1.92468 15.068 2.15669 14.5098C3.2332 11.9287 5.76225 10.45 8.70821 10.45C11.6551 10.45 14.1841 11.9287 15.2606 14.5098C15.4926 15.068 15.0384 15.675 14.4232 15.675ZM5.15243 5.22499C5.15243 3.30393 6.74809 1.74165 8.70821 1.74165C10.6692 1.74165 12.264 3.30393 12.264 5.22499C12.264 7.14605 10.6692 8.70833 8.70821 8.70833C6.74809 8.70833 5.15243 7.14605 5.15243 5.22499ZM17.3781 15.358C16.7318 12.4329 14.7104 10.2741 12.0498 9.29438C13.4596 8.18232 14.2819 6.38402 13.9796 4.41507C13.6294 2.13087 11.6897 0.30303 9.34825 0.0365549C6.11605 -0.331808 3.37454 2.13266 3.37454 5.22499C3.37454 6.87087 4.15326 8.33733 5.36756 9.29438C2.70606 10.2741 0.685489 12.4329 0.0383376 15.358C-0.196344 16.4213 0.678378 17.4167 1.78867 17.4167H15.6277C16.7389 17.4167 17.6137 16.4213 17.3781 15.358Z" fill="white"/>
            </svg>
            PROFILE</a></li>
          <li><a href="index.html#about">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_8_3714" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                 <path d="M22 0H0V22H22V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_8_3714)">
                  <path d="M5.5 5.49982L2.75 7.08753V3.91211L5.5 5.49982Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M2.75 11H19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.16699 5.5H19.2503" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.75 16.5H19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>  
          PLAYLISTS</a></li>
          <li><a href="index.html#services">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 26.5H17.75C24 26.5 26.5 24 26.5 17.75V10.25C26.5 4 24 1.5 17.75 1.5H10.25C4 1.5 1.5 4 1.5 10.25V17.75C1.5 24 4 26.5 10.25 26.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M16.0706 13.9999L14.4737 14.923L12.8776 15.8458C12.8771 15.8461 12.8766 15.8464 12.8761 15.8467C12.8757 15.8469 12.8754 15.8471 12.875 15.8473V13.9999V12.1524C12.8753 12.1526 12.8756 12.1528 12.876 12.153C12.8765 12.1533 12.877 12.1536 12.8776 12.1539L14.4737 13.0767L14.4737 13.0767L16.0706 13.9999Z" stroke="white" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          FAVORITE VIDEOS (333)</a></li>
          <li><a href="index.html#contact">
            <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0003 18.25L12.3295 17.0631C17.0503 12.8639 20.167 10.0944 20.167 6.6955C20.167 3.92602 17.9487 1.75 15.1253 1.75C13.5303 1.75 11.9995 2.47834 11.0003 3.62929C10.0012 2.47834 8.47033 1.75 6.87533 1.75C4.05199 1.75 1.83366 3.92602 1.83366 6.6955C1.83366 10.0944 4.95033 12.8639 9.67116 17.0721L11.0003 18.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          FAVORITE MODELS (1837)</a></li>
          <li><a href="index.html#services">
            <svg width="20" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2012 7.48669L9.45186 0.748206C9.12038 0.417264 8.58224 0.417264 8.24991 0.748206C7.91842 1.08 7.91842 1.61714 8.24991 1.94893L13.7247 7.41371C13.9924 7.68101 13.8029 8.13754 13.4238 8.13754L0.850176 8.13754C0.380993 8.13754 0.000175125 8.52448 0.000175105 8.99374L0.000175105 8.99629C0.000175084 9.46554 0.380992 9.83467 0.850175 9.83467L13.4238 9.83467C13.8029 9.83467 13.9924 10.2921 13.7247 10.5593L8.22376 16.0513C7.89142 16.3822 7.89142 16.9202 8.22376 17.2512C8.55524 17.5829 9.09382 17.5829 9.4253 17.2512L16.5021 10.1868C17.166 9.5241 17.166 8.44981 16.5021 7.78708L16.2012 7.48669Z" fill="white"/>
            </svg>
          LOG OUT</a></li>
        </ul>
        <div class="navbar__search">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7566 17.6804C21.1735 15.8258 22.0252 13.5205 22.0252 11.0126C22.0252 4.93951 17.0857 0 11.0126 0C4.93951 0 0 4.93951 0 11.0126C0 17.0857 4.93951 22.0252 11.0126 22.0252C13.5205 22.0252 15.8273 21.1735 17.6818 19.7566L23.9238 26L26 23.9238L19.7566 17.6804ZM11.0126 19.0885C6.5591 19.0885 2.93669 15.4646 2.93669 11.0126C2.93669 6.56057 6.5591 2.93669 11.0126 2.93669C15.4661 2.93669 19.0885 6.56057 19.0885 11.0126C19.0885 15.4646 15.4661 19.0885 11.0126 19.0885Z" fill="white"/>
          </svg>
          <input type="text" placeholder="SEARCH" />
        </div>
      </div>
      <div class="navbar__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", navBar);
