const navbarWrapper = document.querySelector('.navbar__links-container-wrapper');
const navbarLinksContainer = document.querySelector('.navbar__links-container');
const navbarMemberLinks = document.querySelector('.navbar__member-links');
const memberButton = document.querySelector('#memberButton');
const navbarHamburger = document.querySelector('.navbar__hamburger');

function showNavigationMenu() {
  console.log('showNavigationMenu');
  // navbarWrapper.style.display = block;
  navbarWrapper.classList.add('navbar__links-container-wrapper--show');
  navbarLinksContainer.style.right = '0px';
}

function hideNavigationMenu(event) {
  if (event.target.className.includes('navbar__close') || event.target.className.includes('navbar__links-container-wrapper')) {
    console.log('hideNavigationMenu');
    // navbarWrapper.style.display = 'none';
    navbarWrapper.classList.remove('navbar__links-container-wrapper--show');
    navbarLinksContainer.style.right = '-300px';
  }

}

function toggleMemberLinks() {
  console.log('toggleMemberLinks');
  if (!navbarMemberLinks.className.includes('navbar__member-links--show')) {
    navbarMemberLinks.classList.add('navbar__member-links--show');
  } else {
    navbarMemberLinks.addEventListener('animationend', clearNavbarMemberLinks);
    navbarMemberLinks.classList.add('navbar__member-links--hide');
  }
}

function clearNavbarMemberLinks () {
  console.log('clearNavbarMemberLinks');
  navbarMemberLinks.removeEventListener('animationend', clearNavbarMemberLinks);
  navbarMemberLinks.classList.remove('navbar__member-links--show');
  navbarMemberLinks.classList.remove('navbar__member-links--hide');
}

navbarHamburger.addEventListener('click', showNavigationMenu);
document.addEventListener('click', hideNavigationMenu);
if (memberButton) memberButton.addEventListener('click', toggleMemberLinks);
