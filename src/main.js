import navbar from './components/navbar.html';
import footer from './components/footer.html';
import sliderBlock from './components/sliderBlock.html';
import videosBlock from './components/videosBlock.html';
import modelsBlock from './components/modelsBlock.html';
import banner from './components/banner.html';
import banner2 from './components/banner2.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
let sliderBlock1 = document.getElementById('sliderBlock_1');
let sliderBlock2 = document.getElementById('sliderBlock_2');
document.getElementById('videosBlock').innerHTML = videosBlock;
document.getElementById('modelsBlock').innerHTML = modelsBlock;
document.getElementById('banner_1').innerHTML = banner;
document.getElementById('banner_2').innerHTML = banner2;

sliderBlock1.innerHTML = sliderBlock;
sliderBlock2.innerHTML = sliderBlock;
sliderBlock1.querySelector('.slider-block__container h2').innerHTML = 'HOTTEST AND FRESHEST VIDEO';
sliderBlock2.querySelector('.slider-block__container h2').innerHTML = 'OUR LOST BETS PUNISHMENTS';
