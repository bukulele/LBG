
function openImageGallery(event) {
  let targetElement = event.target.getAttribute('data-gallery-images') || event.target.closest('[data-gallery-images]');
  if (targetElement) {
    console.log(targetElement.getAttribute('data-gallery-images'));
  }
}

document.addEventListener('click', openImageGallery);
