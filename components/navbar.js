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
    </style>
    <nav class="navbar">
      <div class="navbar__logo">
        <a href="index.html">
          <img src="assets/images/LBG_logo.png" alt="logo" />
        </a>
      </div>
      <div class="navbar__links">
        <ul>
          <li><a href="index.html">Videos</a></li>
          <li><a href="index.html#about">Bonus</a></li>
          <li><a href="index.html#services">LIFE GIRLS</a></li>
          <li><a href="index.html#contact">NEWS</a></li>
        </ul>
      </div>
      <div class="navbar__search">
        <input type="text" placeholder="Search" />
        <i class="fas fa-search"></i>
      </div>
      <div class="navbar__login-block">
        <a href="login.html" class="navbar__login">LOG IN</a>
        <a href="register.html" class="navbar__register">JOIN NOW</a>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", navBar);
