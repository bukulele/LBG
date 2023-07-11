var videosPreviewContainer = document.querySelector('#videosBlock .videos-block__container');

function showLoader(event) {
  console.log('showLoader');
  if (event.target.className.includes('video-title__container')) {
    event.target.classList.add('preview-loading');
  }
}

function hideLoader(event) {
  if (event.target.className.includes('video-title__container')) {
    event.target.classList.remove('preview-loading');
  }}

videosPreviewContainer.addEventListener('mouseover', showLoader);
videosPreviewContainer.addEventListener('mouseout', hideLoader);
