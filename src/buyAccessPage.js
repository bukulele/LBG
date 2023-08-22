import navbar from './components/navbar.html';
import footer from './components/footer.html';
import buyAccessBlock from './components/buyAccessBlock.html';
import banner5 from './components/banner5.html';
import benefitsBanner from './components/benefitsBanner.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('buyAccessBlock').innerHTML = buyAccessBlock;
document.getElementById('banner_5').innerHTML = banner5;

document.querySelector('#banner_5 .buy-access-banner__half:nth-of-type(2)').innerHTML = benefitsBanner;
