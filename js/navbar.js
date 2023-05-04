const navbarWrapper = document.querySelector('.navbar__links-container-wrapper');
const navbarLinksContainer = document.querySelector('.navbar__links-container');
const navbarHamburger = document.querySelector('.navbar__hamburger');

function showNavigationMenu() {
  console.log('showNavigationMenu');
  navbarWrapper.style.display = 'block';
  navbarLinksContainer.style.right = '0px';
}

function hideNavigationMenu(event) {
  console.log('hideNavigationMenu');
  if (event.target.className.includes("navbar__close") || event.target.className.includes("navbar__links-container-wrapper")) {
    navbarWrapper.style.display = 'none';
    navbarLinksContainer.style.right = '-300px';
  }

}

navbarHamburger.addEventListener('click', showNavigationMenu);
document.addEventListener('click', hideNavigationMenu);
