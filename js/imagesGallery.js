let imagesGalleryBlock = document.querySelector('#imagesGalleryBlock');
let imagesGalleryContainer = document.querySelector('.images-gallery-block__container');
let imageElement = imagesGalleryContainer.querySelector('.images-gallery-block__image');
let imagesList;
let imageIndex = 0;

function openImageGallery(event) {
  let targetElement = event.target.getAttribute('data-gallery-open-image') === '' && event.target.closest('[data-gallery-images]');
  if (targetElement) {
    imagesList = JSON.parse(targetElement.getAttribute('data-gallery-images'));
    console.log(event.target.getAttribute('src'));
    imageIndex = imagesList.findIndex(item => item === event.target.getAttribute('src'));
    imagesGalleryBlock.style.display = 'block';
    imageElement.src = imagesList[imageIndex];
    // console.log(targetElement.getAttribute('data-gallery-images'));
  }
}

function closeImageGallery(event) {
  if (event.target.className === 'images-gallery-block__container') {
    imagesGalleryBlock.style.display = 'none';
  }
}

document.addEventListener('click', openImageGallery);
document.addEventListener('click', closeImageGallery);
