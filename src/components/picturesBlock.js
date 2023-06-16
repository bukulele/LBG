import image21 from '../../assets/temp/image 21.png';
import image22 from '../../assets/temp/image 22.png';
import image23 from '../../assets/temp/image 23.png';
import image24 from '../../assets/temp/image 24.png';
import pictureTitle from "./pictureTitle.html";

const pictures = [image21, image22, image23, image24];

let picturesBlockTitles = document.getElementById('picturesBlockTitles');

for (let picture of pictures) {
  picturesBlockTitles.insertAdjacentHTML('beforeend', pictureTitle);
  let imageElement = document.createElement('img');
  imageElement.src = picture;
  let title = picturesBlockTitles.lastElementChild;
  title.insertAdjacentElement('afterbegin', imageElement);
}

