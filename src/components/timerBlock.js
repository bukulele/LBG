import image15 from '../../assets/temp/image 15.png';
import image16 from '../../assets/temp/image 16.png';
import image17 from '../../assets/temp/image 17.png';
import image18 from '../../assets/temp/image 18.png';
import image19 from '../../assets/temp/image 19.png';
import videoTitle from './videoTitle.html';

const screenshots = [image16, image17, image18, image19];

let mainVideoContainer = document.querySelector('.timer-block .timer-block__main-video');
let screenshotsContainer = document.querySelector('.timer-block .timer-block__videos-container');

let mainVideoImage = document.createElement('img');
mainVideoImage.src = image15;
mainVideoImage.dataset.preview = './dist/videos/097 - That\'s My Mommy (1955)_New.mov';

screenshotsContainer.setAttribute('data-gallery-images', JSON.stringify(screenshots));

// mainVideoContainer.insertAdjacentElement('afterbegin', mainVideoImage);
mainVideoContainer.insertAdjacentHTML('afterbegin', videoTitle);
let title = mainVideoContainer.querySelector('.video-title__container');
title.querySelector('.video-title__image').insertAdjacentElement('afterbegin', mainVideoImage);
fulfillScreenshots(screenshotsContainer, screenshots);

function fulfillScreenshots (elem, screenshots) {
  for (let screenshot of screenshots) {
    let imageElement = document.createElement('img');
    imageElement.src = screenshot;
    imageElement.setAttribute('data-gallery-open-image', '');
    elem.insertAdjacentElement('beforeend', imageElement);
  }
}
