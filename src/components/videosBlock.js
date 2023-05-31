import image1 from '../../assets/temp/image 1.png';
import image2 from '../../assets/temp/image 2.png';
import image3 from '../../assets/temp/image 3.png';
import image4 from '../../assets/temp/image 4.png';
import image5 from '../../assets/temp/image 5.png';
import image6 from '../../assets/temp/image 6.png';
import videoTitle from './videoTitle.html';

const videos = [image1, image2, image3, image4, image5, image6];

let videosBlockTitles = document.getElementById('videosBlockTitles');

for (let video of videos) {
  videosBlockTitles.insertAdjacentHTML('beforeend', videoTitle);
  let imageElement = document.createElement('img');
  imageElement.src = video;
  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);
}

