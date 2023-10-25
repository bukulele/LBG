import image26 from '../../assets/temp/image 26.png';
import image27 from '../../assets/temp/image 27.png';
import image28 from '../../assets/temp/image 28.png';
import image29 from '../../assets/temp/image 29.png';
import image30 from '../../assets/temp/image 30.png';
import image31 from '../../assets/temp/image 31.png';
import image32 from '../../assets/temp/image 32.png';
import image33 from '../../assets/temp/image 33.png';
import sliderElement from './sliderElement.html';

const pictures = [image26, image27, image28, image29, image30, image31, image32, image33, image26, image27, image28];

let sliderBlockSlider_1 = document.querySelector('#sliderBlock_1 .slider-block__slider');
sliderBlockSlider_1.setAttribute('data-gallery-images', JSON.stringify(pictures));

fulfillSlider(sliderBlockSlider_1, pictures);

function fulfillSlider (elem, slides) {
  for (let slide of slides) {
    elem.insertAdjacentHTML('beforeend', sliderElement);
    let imageElement = document.createElement('img');
    imageElement.src = slide;
    imageElement.setAttribute('data-gallery-open-image', '');
    elem.lastElementChild.insertAdjacentElement('afterbegin', imageElement);

    if (elem.closest('.slider-photo')) {
      let slideBlockOver = elem.querySelector('.slider-element__block-over');
      slideBlockOver.remove();
    }
  }
}
