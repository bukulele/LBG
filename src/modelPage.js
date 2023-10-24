import navbar from './components/navbar.html';
import footer from './components/footer.html';
import banner from './components/banner.html';
import timerBlock from './components/timerBlock.html';
import picturesBlock from './components/picturesBlock.html';
import commentsBlock from './components/commentsBlock.html';
import pagerContainer from './components/pagerContainer.html';
import modelProfileBlock from './components/modelProfileBlock.html';
import videosBlock from './components/videosBlock.html';
import memberButtonSide from './components/memberButtonSide.html';
import memberButton from './components/memberButton.html';
import loginJoinButtons from './components/logInJoinButtons.html';
import imagesGalleryBlock from './components/imagesGalleryBlock.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('modelProfileBlock').innerHTML = modelProfileBlock;
document.getElementById('picturesBlock').innerHTML = picturesBlock;
document.getElementById('videosBlock').innerHTML = videosBlock;
document.getElementById('commentsBlock').innerHTML = commentsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('timerBlock').innerHTML = timerBlock;
document.getElementById('imagesGalleryBlock').innerHTML = imagesGalleryBlock;

document.querySelector('.videos-block__container h2').innerHTML = 'VIDEOS <span class="header-text--colored">(17)</span>';
document.querySelector('.pictures-block__button-container').innerHTML = pagerContainer;

if (sessionStorage.getItem('auth') === 'true') {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = memberButtonSide;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = memberButton;
} else {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons .join-now-button').classList.add('btn--mobile-small');
}
