import navbar from './components/navbar.html';
import footer from './components/footer.html';
import sliderBlock from './components/sliderBlock.html';
import videosBlock from './components/videosBlock.html';
import modelsBlock from './components/modelsBlock.html';
import banner from './components/banner.html';
import banner2 from './components/banner2.html';
import timerBlock from './components/timerBlock.html';
import mainVideoBlock from './components/mainVideoBlock.html';
import memberButtonSide from './components/memberButtonSide.html';
import memberButton from './components/memberButton.html';
import loginJoinButtons from './components/logInJoinButtons.html';
import imagesGalleryBlock from './components/imagesGalleryBlock.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('mainVideoBlock').innerHTML = mainVideoBlock;
let sliderBlock1 = document.getElementById('sliderBlock_1');
let sliderBlock2 = document.getElementById('sliderBlock_2');
document.getElementById('videosBlock').innerHTML = videosBlock;
document.getElementById('modelsBlock').innerHTML = modelsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('banner_2').innerHTML = banner2;
document.getElementById('timerBlock').innerHTML = timerBlock;
document.getElementById('imagesGalleryBlock').innerHTML = imagesGalleryBlock;

sliderBlock1.innerHTML = sliderBlock;
sliderBlock2.innerHTML = sliderBlock;
sliderBlock1.querySelector('.slider-block__container h2').innerHTML = 'OUR LOST BETS GAMES';
sliderBlock2.querySelector('.slider-block__container h2').innerHTML = 'OUR LOST BETS PUNISHMENTS';

document.querySelector('.videos-block__container h2').innerHTML = 'HOTTEST AND FRESHEST VIDEO';

if (sessionStorage.getItem('auth') === 'true') {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = memberButtonSide;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = memberButton;
} else {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons .join-now-button').classList.add('btn--mobile-small');
}
