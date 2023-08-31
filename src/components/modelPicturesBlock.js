import image26 from '../../assets/temp/image 26.png';
import image27 from '../../assets/temp/image 27.png';
import image28 from '../../assets/temp/image 28.png';
import image29 from '../../assets/temp/image 29.png';
import image30 from '../../assets/temp/image 30.png';
import image31 from '../../assets/temp/image 31.png';
import image32 from '../../assets/temp/image 32.png';
import image33 from '../../assets/temp/image 33.png';

import pictureTitle from "./pictureTitle.html";

const pictures = [image26, image27, image28, image29, image30, image31, image32, image33];

let picturesBlockTitles = document.getElementById('picturesBlockTitles');
picturesBlockTitles.setAttribute('data-gallery-images', JSON.stringify(pictures));


for (let picture of pictures) {
  picturesBlockTitles.insertAdjacentHTML('beforeend', pictureTitle);
  let imageElement = document.createElement('img');
  imageElement.src = picture;
  imageElement.setAttribute('data-gallery-open-image', '');
  let title = picturesBlockTitles.lastElementChild.querySelector('.picture-title__image');
  title.insertAdjacentElement('afterbegin', imageElement);
}

