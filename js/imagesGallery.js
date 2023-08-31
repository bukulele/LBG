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

function nextImage(event) {
  if (event.target.className.includes('images-gallery-block__slide-right')) {
    event.preventDefault();
    if (imageIndex === imagesList.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
    imageElement.src = imagesList[imageIndex];
  }
}

function prevImage(event) {
  if (event.target.className.includes('images-gallery-block__slide-left')) {
    event.preventDefault();
    if (imageIndex === 0) {
      imageIndex = imagesList.length - 1;
    } else {
      imageIndex -= 1;
    }
    imageElement.src = imagesList[imageIndex];
  }
}

document.addEventListener('click', openImageGallery);
document.addEventListener('click', closeImageGallery);
document.addEventListener('click', nextImage);
document.addEventListener('click', prevImage);
