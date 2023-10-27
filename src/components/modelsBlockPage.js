import image7 from '../../assets/temp/image 7.png';
import image8 from '../../assets/temp/image 8.png';
import image9 from '../../assets/temp/image 9.png';
import image10 from '../../assets/temp/image 10.png';
import image11 from '../../assets/temp/image 11.png';
import image12 from '../../assets/temp/image 12.png';
import image13 from '../../assets/temp/image 13.png';
import image14 from '../../assets/temp/image 14.png';
import modelTitle from "./modelTitle.html";
import banner2 from "./banner2.html";
import filters from "./modelsFilters.html";

const models = [image7, image8, image9, image10, image11, image12, image13, image14];

let modelsBlockTitles = document.getElementById('modelsBlockTitles');

let headerContainer = document.querySelector('.models-block .header__container');
headerContainer.insertAdjacentHTML('beforeend', filters);

for (let model of models) {
  modelsBlockTitles.insertAdjacentHTML('beforeend', modelTitle);
  let imageElement = document.createElement('img');
  imageElement.src = model;
  let title = modelsBlockTitles.lastElementChild.querySelector('.model-title__image')
  title.insertAdjacentElement('afterbegin', imageElement);
}

let banner2Container = '<div id="banner_2" class="banner-block banner-block--type-2"></div>';

modelsBlockTitles.insertAdjacentHTML('beforeend', banner2Container);
document.getElementById('banner_2').innerHTML = banner2;

for (let model of models) {
  modelsBlockTitles.insertAdjacentHTML('beforeend', modelTitle);
  let imageElement = document.createElement('img');
  imageElement.src = model;
  let title = modelsBlockTitles.lastElementChild.querySelector('.model-title__image')
  title.insertAdjacentElement('afterbegin', imageElement);
}
