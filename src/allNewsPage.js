import navbar from './components/navbar.html';
import footer from './components/footer.html';
import singleNewsBlock from './components/singleNewsBlock.html';
import banner from "./components/banner.html";
import timerBlock from "./components/timerBlock.html";

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('newsBlock').innerHTML = singleNewsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('timerBlock').innerHTML = timerBlock;
document.getElementById('newsBlock').insertAdjacentHTML('afterbegin', singleNewsBlock);
document.getElementById('newsBlock').insertAdjacentHTML('afterbegin', singleNewsBlock);
document.getElementById('newsBlock').insertAdjacentHTML('afterbegin', singleNewsBlock);
document.getElementById('newsBlock').insertAdjacentHTML('afterbegin', singleNewsBlock);
