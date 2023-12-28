let imagesGalleryBlock = document.querySelector('#imagesGalleryBlock');
let imagesGalleryContainer = document.querySelector('.images-gallery-block__container');
let imageElement = imagesGalleryContainer.querySelector('.images-gallery-block__image');
let imagesList;
let imageIndex = 0;

let gallery_startXPosition;

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

function closeImageGallery() {
  // if (event.target.className === 'images-gallery-block__container' ||
  //   event.target.className === 'images-gallery-block__close') {
    // imagesGalleryBlock.style.display = 'none';
    imagesGalleryBlock.classList.add('images-gallery-block_hidden');
  // }
}

function handleImageGalleryClick(event) {
  if (event.target.className.includes('images-gallery-block__slide-right')) {
    event.preventDefault();
    nextImage();
  } else if (event.target.className.includes('images-gallery-block__slide-left')) {
    event.preventDefault();
    prevImage();
  } else if (event.target.className === 'images-gallery-block__container' ||
    event.target.className === 'images-gallery-block__close') {
    event.preventDefault();
    closeImageGallery();
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
    handleImageGalleryClick(event);
  } else if (event.target.className.includes('images-gallery-block__image')) {
    gallery_startXPosition = event.changedTouches[0].clientX;
  }
}

function keyboardGalleryHandler(event) {
  if (!imagesGalleryBlock.className.includes('images-gallery-block_hidden')) {
    event.preventDefault();
    // console.log(event.key);
    if (event.key === 'ArrowLeft') {
      prevImage();
    }
    if (event.key === 'ArrowRight') {
      nextImage();
    }
    if (event.key === 'Escape') {
      closeImageGallery();
    }
  }
}

function handleImageGalleryTouchMove(event) {
  if (event.target.className.includes('images-gallery-block__image') && gallery_startXPosition) {
    event.preventDefault();
    let currentTouch = event.changedTouches[0].clientX;
    if (gallery_startXPosition - currentTouch > 40) {
      nextImage();
      gallery_startXPosition = null;
    } else if (gallery_startXPosition - currentTouch < -40) {
      prevImage();
      gallery_startXPosition = null;
    }
    // console.log(gallery_startXPosition - currentTouch);
  }
  // console.log(event);
}

function clearGalleryStartTouchPosition() {
  gallery_startXPosition = null;
}

document.addEventListener('click', openImageGallery);
// document.addEventListener('click', closeImageGallery);
document.addEventListener('click', handleImageGalleryClick);
// document.addEventListener('click', switchImage);
document.addEventListener('touchstart', handleImageGalleryTouch, {passive: false});
document.addEventListener('touchmove', handleImageGalleryTouchMove);
document.addEventListener('touchend', clearGalleryStartTouchPosition);
document.addEventListener('keydown', keyboardGalleryHandler);
