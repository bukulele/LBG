import image1 from '../../assets/temp/image 1.png';
import image2 from '../../assets/temp/image 2.png';
import image3 from '../../assets/temp/image 3.png';
import image4 from '../../assets/temp/image 4.png';
import image5 from '../../assets/temp/image 5.png';
import image6 from '../../assets/temp/image 6.png';
import videoTitle from './videoTitle.html';
import banner2 from './banner2.html';
import messageBlock from './messageBlock.html';
import filters from './videosFilters.html';
import singleNewsBlock from './singleNewsBlock.html';

const videos = [image1, image2, image3, image4, image5, image6];

let videosBlockTitles = document.getElementById('videosBlockTitles');

let newsItemBlock = document.getElementById('newsItemBlock');
newsItemBlock.insertAdjacentHTML('afterbegin', singleNewsBlock);

videosBlockTitles.insertAdjacentHTML('beforebegin', filters);

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);
}

let message = '<div id="message" class="message-block"></div>';
videosBlockTitles.insertAdjacentHTML('beforeend', message);
document.getElementById('message').innerHTML = messageBlock;

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);
}
let banner2Container = '<div id="banner_2" class="banner-block"></div>';

videosBlockTitles.insertAdjacentHTML('beforeend', banner2Container);
document.getElementById('banner_2').innerHTML = banner2;

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);
}
for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);
}
