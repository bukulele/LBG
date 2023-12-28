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
    // imagesGalleryBlock.style.display = 'block';
    imagesGalleryBlock.classList.remove('images-gallery-block_hidden');
    imageElement.src = imagesList[imageIndex];
  }
}

function closeImageGallery(event) {
  if (event.target.className === 'images-gallery-block__container' || event.target.className === 'images-gallery-block__close') {
    // imagesGalleryBlock.style.display = 'none';
    imagesGalleryBlock.classList.add('images-gallery-block_hidden');
  }
}

function switchImage(event) {
  if (event.target.className.includes('images-gallery-block__slide-right')) {
    event.preventDefault();
    nextImage();
  } else if (event.target.className.includes('images-gallery-block__slide-left')) {
    event.preventDefault();
    prevImage();
  }
}

function nextImage() {
  // event.preventDefault();
  if (imageIndex === imagesList.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }
  imageElement.src = imagesList[imageIndex];
}

function prevImage() {
  // event.preventDefault();
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

function keyboardGalleryHandler(event) {
  if (!imagesGalleryBlock.className.includes('images-gallery-block_hidden')) {
    event.preventDefault();
    if (event.key === 'ArrowLeft') {
      prevImage();
    }
    if (event.key === 'ArrowRight') {
      nextImage();
    }
  }
}

document.addEventListener('click', openImageGallery);
document.addEventListener('click', closeImageGallery);
document.addEventListener('click', switchImage);
document.addEventListener('touchstart', handleImageGalleryTouch, {passive: false});
document.addEventListener('keydown', keyboardGalleryHandler);
