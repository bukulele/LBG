class navBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;
        background: linear-gradient(90.01deg, #6C060C -0.4%, #671616 98.74%);
        padding: 10px 32px;
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
      .navbar__links-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 43px;
      }
      .navbar__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 43px;
      }
      .navbar__links li {
        list-style: none;
      }
      .navbar__links a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 10px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      .navbar__search {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 24px;
        background-color: #792324;
        padding: 0 18px;
        height: 50px;
        width: 394px;
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
      .navbar__login-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 24px;
      }
      .navbar__login-block a {
        color: #fff;
        font-weight: 700;
        white-space: nowrap;
      }
    </style>
    <nav class="navbar">
      <div class="navbar__logo">
        <a href="index.html">
          <img src="assets/images/LBG_logo.png" alt="logo" />
        </a>
      </div>
      <div class="navbar__links-container">
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
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>
      <div class="navbar__search">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7566 17.6804C21.1735 15.8258 22.0252 13.5205 22.0252 11.0126C22.0252 4.93951 17.0857 0 11.0126 0C4.93951 0 0 4.93951 0 11.0126C0 17.0857 4.93951 22.0252 11.0126 22.0252C13.5205 22.0252 15.8273 21.1735 17.6818 19.7566L23.9238 26L26 23.9238L19.7566 17.6804ZM11.0126 19.0885C6.5591 19.0885 2.93669 15.4646 2.93669 11.0126C2.93669 6.56057 6.5591 2.93669 11.0126 2.93669C15.4661 2.93669 19.0885 6.56057 19.0885 11.0126C19.0885 15.4646 15.4661 19.0885 11.0126 19.0885Z" fill="white"/>
        </svg>
        <input type="text" placeholder="SEARCH" />
      </div>
      <div class="navbar__login-block">
        <a href="login.html" class="">LOG IN</a>
        <a href="register.html" class="btn btn--pink">JOIN NOW</a>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", navBar);
