var videosBlockContainer = document.querySelector('#videosBlock .videos-block__container');

function showLoader(event) {
  if (event.target.className.includes('video-title__container')) {
    event.target.classList.add('preview-loading');
  }
}

function hideLoader(event) {
  if (event.target.className.includes('video-title__container')) {
    event.target.classList.remove('preview-loading');
  }}

videosBlockContainer.addEventListener('mouseover', showLoader);
videosBlockContainer.addEventListener('mouseout', hideLoader);
