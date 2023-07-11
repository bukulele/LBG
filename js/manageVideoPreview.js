var videosPreviewContainer = document.querySelector('#videosBlock .videos-block__container');

function showLoader(event) {
  console.log('showLoader');
  if (event.target.className.includes('video-title__container')) {
    fetch('../assets/temp/097 - That\'s My Mommy (1955)_New.mov')
      .then(res => {
        let videoElement = document.createElement('video');
        videoElement.src = res.url;
        videoElement.autoplay = "true";
        videoElement.muted = "true";
        event.target.insertAdjacentElement('afterbegin', videoElement);
        console.log(res);
      });
    // event.target.
    event.target.classList.add('preview-loading');
  }
}

function hideLoader(event) {
  if (event.target.className.includes('video-title__container')) {
    let videoElement = event.target.querySelector('video');
    videoElement.remove();
    event.target.classList.remove('preview-loading');
  }}

videosPreviewContainer.addEventListener('mouseover', showLoader);
videosPreviewContainer.addEventListener('mouseout', hideLoader);
