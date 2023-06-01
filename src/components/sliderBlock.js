import image1 from '../../assets/temp/image 1.png';
import image2 from '../../assets/temp/image 2.png';
import image3 from '../../assets/temp/image 3.png';
import image4 from '../../assets/temp/image 4.png';
import image5 from '../../assets/temp/image 5.png';
import image6 from '../../assets/temp/image 6.png';
import sliderElement from './sliderElement.html';

const slides_1 = [image1, image2, image3, image4, image5, image6, image1, image2, image3];

let sliderBlockSlider_1 = document.querySelector('#sliderBlock_1 .slider-block__slider');
let sliderBlockSlider_2 = document.querySelector('#sliderBlock_2 .slider-block__slider');

fulfillSlider(sliderBlockSlider_1, slides_1);
fulfillSlider(sliderBlockSlider_2, slides_1);

function fulfillSlider (elem, slides) {
  for (let slide of slides) {
    elem.insertAdjacentHTML('beforeend', sliderElement);
    let imageElement = document.createElement('img');
    imageElement.src = slide;
    elem.lastElementChild.insertAdjacentElement('afterbegin', imageElement);
  }
}
