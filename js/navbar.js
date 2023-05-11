const navBarElement = document.querySelector('.navbar');
const navbarWrapper = document.querySelector('.navbar__links-container-wrapper');
const navbarLinksContainer = document.querySelector('.navbar__links-container');
const navbarMemberLinks = document.querySelector('.links-container__member-links');
const memberButtonSide = document.querySelector('#memberButtonSide');
const navbarHamburger = document.querySelector('.navbar__hamburger');
const memberButton = document.querySelector('#memberButton');
const memberZoneContainer = document.querySelector('.navbar__member-zone-container');
const elem = document.querySelector('#nav_bar');

const icon = document.querySelector('.search-svg-i');
console.log(icon);

let memberButtonSideChevron;
let memberButtonChevron;

if (memberButtonSide) memberButtonSideChevron = memberButtonSide.querySelector('.user-buttons__chevron');
if (memberButton) memberButtonChevron = memberButton.querySelector('.user-buttons__chevron');
function showNavigationMenu() {
  console.log('showNavigationMenu');
  navbarWrapper.classList.add('navbar__links-container-wrapper--show');
  navbarLinksContainer.style.right = '0px';
}

function hideNavigationMenu(event) {
  console.log(memberZoneContainer.className.includes('navbar__member-zone-container--visible'));
  if (event.target.className.includes('navbar__close') || event.target.className.includes('navbar__links-container-wrapper')) {
    console.log('hideNavigationMenu');
    navbarWrapper.classList.remove('navbar__links-container-wrapper--show');
    navbarLinksContainer.style.right = '-300px';
  }
  if (memberZoneContainer.className.includes('navbar__member-zone-container--visible') && !event.target.closest('.navbar__member-zone-container')) {
    console.log('hideUserMenu');
    console.log(memberButton);
    memberButtonChevron.style.removeProperty('transform');
    memberZoneContainer.style.removeProperty('top');
    memberZoneContainer.classList.remove('navbar__member-zone-container--visible');
    memberZoneContainer.classList.add('navbar__member-zone-container--hidden');
  }

}

function toggleMemberLinks() {
  console.log('toggleMemberLinks');
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
  console.log('clearNavbarMemberLinks');
  navbarMemberLinks.removeEventListener('animationend', clearNavbarMemberLinks);
  navbarMemberLinks.classList.remove('links-container__member-links--show');
  navbarMemberLinks.classList.remove('links-container__member-links--hide');
}

function showUserMenu (event) {
  event.stopPropagation();
  memberButtonChevron.style.transform = 'rotate(-180deg)';
  console.log('showUserMenu');
  let navBarHeight = navBarElement.offsetHeight;
  if (memberZoneContainer.className.includes('navbar__member-zone-container--hidden')) {
    memberZoneContainer.classList.remove('navbar__member-zone-container--hidden');
    memberZoneContainer.classList.add('navbar__member-zone-container--visible');
    memberZoneContainer.style.top = `${navBarHeight}px`;
  }
}

function changeShit () {
  console.log(elem);
  elem.setAttribute('userAuthorized', 'true');
}

navbarHamburger.addEventListener('click', showNavigationMenu);
document.addEventListener('click', hideNavigationMenu);

if (memberButtonSide) memberButtonSide.addEventListener('click', toggleMemberLinks);
if (memberButton) memberButton.addEventListener('click', showUserMenu);
