import navbar from './components/navbar.html';
import footer from './components/footer.html';
import modelsBlock from './components/modelsBlock.html';
import banner from './components/banner.html';
import timerBlock from './components/timerBlock.html';
import pagerContainer from "./components/pagerContainer.html";

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('modelsBlock').innerHTML = modelsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('timerBlock').innerHTML = timerBlock;

document.querySelector('.models-block__button-container').innerHTML = pagerContainer;
