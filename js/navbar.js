const navBarElement = document.querySelector('.navbar');
const navbarWrapper = document.querySelector('.navbar__links-container-wrapper');
const navbarLinksContainer = document.querySelector('.navbar__links-container');
const navbarMemberLinks = document.querySelector('.links-container__member-links');
const memberButtonSide = document.querySelector('#memberButtonSide');
const navbarHamburger = document.querySelector('.navbar__hamburger');
const memberButton = document.querySelector('#memberButton');
const memberZoneContainer = document.querySelector('.navbar__member-zone-container');
const navbarNewsBar = navBarElement.querySelector('.navbar__news-bar');
const closeNavbarNewsBarButton = navBarElement.querySelector('.navbar__news-bar .btn');
const mainContainer = document.querySelector('.main');
let navBarHeight;

let memberButtonSideChevron;
let memberButtonChevron;

if (memberButtonSide) memberButtonSideChevron = memberButtonSide.querySelector('.user-buttons__chevron');
if (memberButton) memberButtonChevron = memberButton.querySelector('.user-buttons__chevron');

setMainBlockMargin();

function handleNavbarHeight() {
  navBarHeight = navBarElement.offsetHeight;
}

function showNavigationMenu() {
  navbarWrapper.classList.add('navbar__links-container-wrapper--show');
  navbarLinksContainer.classList.remove('navbar__links-container--hidden');
  // navbarLinksContainer.style.right = '0px';
}

function hideNavigationMenu(event) {
  if (event.target.className.includes('navbar__close') || event.target.className.includes('navbar__links-container-wrapper')) {
    navbarWrapper.classList.remove('navbar__links-container-wrapper--show');
    // navbarLinksContainer.style.right = '-300px';
    navbarLinksContainer.classList.add('navbar__links-container--hidden');
  }
  if (memberZoneContainer.className.includes('navbar__member-zone-container--visible') && !event.target.closest('.navbar__member-zone-container')) {
    memberButtonChevron.style.removeProperty('transform');
    memberZoneContainer.style.removeProperty('top');
    memberZoneContainer.classList.remove('navbar__member-zone-container--visible');
    memberZoneContainer.classList.add('navbar__member-zone-container--hidden');
    if (memberButton) memberButton.addEventListener('click', showUserMenu);
  }

}

function toggleMemberLinks() {
  if (!navbarMemberLinks.className.includes('links-container__member-links--show')) {
    memberButtonSideChevron.style.transform = 'rotate(-180deg)';
    navbarMemberLinks.classList.add('links-container__member-links--show');
  } else {
    memberButtonSideChevron.style.removeProperty('transform');
    navbarMemberLinks.addEventListener('animationend', clearNavbarMemberLinks);
    navbarMemberLinks.classList.add('links-container__member-links--hide');
  }
}

function clearNavbarMemberLinks () {
  navbarMemberLinks.removeEventListener('animationend', clearNavbarMemberLinks);
  navbarMemberLinks.classList.remove('links-container__member-links--show');
  navbarMemberLinks.classList.remove('links-container__member-links--hide');
}

function showUserMenu (event) {
  event.stopPropagation();
  memberButtonChevron.style.transform = 'rotate(-180deg)';
  // let navBarHeight = navBarElement.offsetHeight;
  handleNavbarHeight();
  if (memberZoneContainer.className.includes('navbar__member-zone-container--hidden')) {
    memberZoneContainer.classList.remove('navbar__member-zone-container--hidden');
    memberZoneContainer.classList.add('navbar__member-zone-container--visible');
    memberZoneContainer.style.top = `${navBarHeight - 1}px`;
    memberButton.removeEventListener('click', showUserMenu);
  }
}

function closeNavbarNewsBar() {
  navbarNewsBar.remove();
  setMainBlockMargin();
}

function setMainBlockMargin() {
  handleNavbarHeight();
  mainContainer.style.marginTop = `${navBarHeight}px`;
}

navbarHamburger.addEventListener('click', showNavigationMenu);
document.addEventListener('click', hideNavigationMenu);
if (closeNavbarNewsBarButton) closeNavbarNewsBarButton.addEventListener('click', closeNavbarNewsBar);

if (memberButtonSide) memberButtonSide.addEventListener('click', toggleMemberLinks);
if (memberButton) memberButton.addEventListener('click', showUserMenu);



//DELETE FROM HERE

function logOut(event) {
  // console.log(event.target);
  if (event.target.className.includes('log-out-button')) {
    // console.log(event);
    event.preventDefault();
    sessionStorage.setItem('auth', 'false');
    window.location.href = '/LBG/index.html';
  }
}

document.addEventListener('click', logOut);

//DELETE TO HERE
