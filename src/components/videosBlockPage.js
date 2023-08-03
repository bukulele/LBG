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
import testVideo from '../../assets/temp/097 - That\'s My Mommy (1955)_New.mov';
import manageVideoPreview from '../../js/manageVideoPreview';

const videos = [image1, image2, image3, image4, image5, image6];

let videosBlockTitles = document.getElementById('videosBlockTitles');

let newsItemContainer = '<div id="newsItemBlock" class="news-item-block"></div>';
videosBlockTitles.insertAdjacentHTML('beforebegin', newsItemContainer);

let newsItemBlock = document.getElementById('newsItemBlock');
newsItemBlock.insertAdjacentHTML('afterbegin', singleNewsBlock);
newsItemBlock.querySelector('.single-news-block__text').insertAdjacentHTML('beforeend', '<a href="onenews.html" class="single-news-block__read-more">Read more</a>');
newsItemBlock.querySelector('.single-news-block__upper-container').insertAdjacentHTML('beforeend', `
      <div class="single-news-block__close">
          <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.1936 4.1936C4.45145 3.93582 4.80112 3.79102 5.16572 3.79102C5.53032 3.79102 5.88 3.93582 6.13785 4.1936L10.9998 9.0556L15.8618 4.1936C16.1212 3.94313 16.4685 3.80454 16.829 3.80767C17.1895 3.8108 17.5344 3.95541 17.7893 4.21035C18.0443 4.46528 18.1889 4.81015 18.192 5.17067C18.1952 5.53119 18.0566 5.87852 17.8061 6.13785L12.9441 10.9998L17.8061 15.8618C18.0566 16.1212 18.1952 16.4685 18.192 16.829C18.1889 17.1895 18.0443 17.5344 17.7893 17.7893C17.5344 18.0443 17.1895 18.1889 16.829 18.192C16.4685 18.1952 16.1212 18.0566 15.8618 17.8061L10.9998 12.9441L6.13785 17.8061C5.87852 18.0566 5.53119 18.1952 5.17067 18.192C4.81015 18.1889 4.46528 18.0443 4.21035 17.7893C3.95541 17.5344 3.8108 17.1895 3.80767 16.829C3.80454 16.4685 3.94313 16.1212 4.1936 15.8618L9.0556 10.9998L4.1936 6.13785C3.93582 5.88 3.79102 5.53032 3.79102 5.16572C3.79102 4.80112 3.93582 4.45145 4.1936 4.1936Z" fill="currentColor"/>
          </svg>
      </div>
`);

newsItemBlock.insertAdjacentHTML('beforebegin', filters);

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.querySelector('.video-title__image').insertAdjacentElement('afterbegin', imageElement);
}

let message = '<div id="message" class="message-block"></div>';
videosBlockTitles.insertAdjacentHTML('beforeend', message);
document.getElementById('message').innerHTML = messageBlock;

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.querySelector('.video-title__image').insertAdjacentElement('afterbegin', imageElement);
}
let banner2Container = '<div id="banner_2" class="banner-block"></div>';

videosBlockTitles.insertAdjacentHTML('beforeend', banner2Container);
document.getElementById('banner_2').innerHTML = banner2;

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.querySelector('.video-title__image').insertAdjacentElement('afterbegin', imageElement);
}
for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.querySelector('.video-title__image').insertAdjacentElement('afterbegin', imageElement);
}
