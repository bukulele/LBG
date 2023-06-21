import navbar from './components/navbar.html';
import footer from './components/footer.html';
import banner from './components/banner.html';
import timerBlock from './components/timerBlock.html';
import picturesBlock from './components/picturesBlock.html';
import commentsBlock from './components/commentsBlock.html';
import pagerContainer from './components/pagerContainer.html';
import modelProfileBlock from './components/modelProfileBlock.html';
import videosBlock from './components/videosBlock.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('modelProfileBlock').innerHTML = modelProfileBlock;
document.getElementById('picturesBlock').innerHTML = picturesBlock;
document.getElementById('videosBlock').innerHTML = videosBlock;
document.getElementById('commentsBlock').innerHTML = commentsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('timerBlock').innerHTML = timerBlock;

document.querySelector('.videos-block__container h2').innerHTML = 'VIDEOS';
document.querySelector('.pictures-block__button-container').innerHTML = pagerContainer;
