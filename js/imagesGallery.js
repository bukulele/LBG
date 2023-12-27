let imagesGalleryBlock = document.querySelector('#imagesGalleryBlock');
let imagesGalleryContainer = document.querySelector('.images-gallery-block__container');
let imageElement = imagesGalleryContainer.querySelector('.images-gallery-block__image');
let imagesList;
let imageIndex = 0;

function openImageGallery(event) {
  let targetElement = event.target.getAttribute('data-gallery-open-image') === '' && event.target.closest('[data-gallery-images]');
  if (targetElement) {
    event.preventDefault();
    imagesList = JSON.parse(targetElement.getAttribute('data-gallery-images'));
    imageIndex = imagesList.findIndex(item => item === event.target.getAttribute('src'));
    imagesGalleryBlock.style.display = 'block';
    imageElement.src = imagesList[imageIndex];
  }
}

function closeImageGallery(event) {
  if (event.target.className === 'images-gallery-block__container' || event.target.className === 'images-gallery-block__close') {
    imagesGalleryBlock.style.display = 'none';
  }
}

function switchImage(event) {
  if (event.target.className.includes('images-gallery-block__slide-right')) {
    nextImage(event);
  } else if (event.target.className.includes('images-gallery-block__slide-left')) {
    prevImage(event);
  }
}

function nextImage(event) {
  event.preventDefault();
  if (imageIndex === imagesList.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }
  imageElement.src = imagesList[imageIndex];
}

function prevImage(event) {
  event.preventDefault();
  if (imageIndex === 0) {
    imageIndex = imagesList.length - 1;
  } else {
    imageIndex -= 1;
  }
  imageElement.src = imagesList[imageIndex];
}

function handleImageGalleryTouch(event) {

  if (event.target.className.includes('btn--slider')) {
    event.preventDefault();
    switchImage(event);
  }
}

document.addEventListener('click', openImageGallery);
document.addEventListener('click', closeImageGallery);
document.addEventListener('click', switchImage);
document.addEventListener('touchstart', handleImageGalleryTouch, {passive: false});
