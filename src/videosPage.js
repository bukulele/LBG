import navbar from './components/navbar.html';
import footer from './components/footer.html';
import videosBlock from './components/videosBlock.html';
import banner from './components/banner.html';
import timerBlock from './components/timerBlock.html';
import pagerContainer from './components/pagerContainer.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('videosBlock').innerHTML = videosBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('timerBlock').innerHTML = timerBlock;

document.querySelector('.videos-block__container h2').innerHTML = 'VIDEOS';
document.querySelector('.videos-block__button-container').innerHTML = pagerContainer;
