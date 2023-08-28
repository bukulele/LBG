import navbar from './components/navbar.html';
import footer from './components/footer.html';
import oneNewsBlock from './components/oneNewsBlock.html';
import banner from "./components/banner.html";
import timerBlock from "./components/timerBlock.html";
import commentsBlock from './components/commentsBlock.html';
import memberButtonSide from './components/memberButtonSide.html';
import memberButton from './components/memberButton.html';
import loginJoinButtons from './components/logInJoinButtons.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('newsBlock').innerHTML = oneNewsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('timerBlock').innerHTML = timerBlock;
document.getElementById('commentsBlock').innerHTML = commentsBlock;

if (sessionStorage.getItem('auth') === 'true') {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = memberButtonSide;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = memberButton;
} else {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons .join-now-button').classList.add('btn--mobile-small');
}
