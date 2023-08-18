import image39 from '../../assets/temp/image 39.png';
import image40 from '../../assets/temp/image 40.png';
import image41 from '../../assets/temp/image 41.png';
import image42 from '../../assets/temp/image 42.png';
import image43 from '../../assets/temp/image 43.png';
import image44 from '../../assets/temp/image 44.png';
import image45 from '../../assets/temp/image 45.png';
import image46 from '../../assets/temp/image 46.png';
import image47 from '../../assets/temp/image 47.png';
import image48 from '../../assets/temp/image 48.png';
import image49 from '../../assets/temp/image 49.png';
import image50 from '../../assets/temp/image 50.png';
import image51 from '../../assets/temp/image 51.png';
import image52 from '../../assets/temp/image 52.png';
import image53 from '../../assets/temp/image 53.png';
import tourTitle from './tourTitle.html';
import pagerContainer from './pagerContainer.html';
import benefitsBanner from './benefitsBanner.html';
import banner3 from './banner3.html';

const images = [image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51, image52, image53];

let tourBlockTitlesContainer = document.querySelector('.tour-block__container .tour-block__titles');

for (let i = 0; i < images.length; i++) {
  tourBlockTitlesContainer.insertAdjacentHTML('beforeend', tourTitle);
  let imageElement = document.createElement('img');
  imageElement.src = images[i];
  tourBlockTitlesContainer.lastElementChild.querySelector('.tour-block__image').insertAdjacentElement('afterbegin', imageElement);
  if (i === 0) {
    tourBlockTitlesContainer.insertAdjacentHTML('beforeend', banner3);
  }
  if (i === 9) {
    tourBlockTitlesContainer.insertAdjacentHTML('beforeend', `
    <a href="" class="tour-block__banner-container">
        ${benefitsBanner}
    </a>
    `);
    let benefitsBannerHeader = tourBlockTitlesContainer.querySelector('.benefits-banner__header');
    benefitsBannerHeader.innerHTML = 'Member benefits:';
  }
}

document.querySelector('.tour-block__button-container').innerHTML = pagerContainer;
