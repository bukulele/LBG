var videosPreviewContainer = document.querySelector('#videosBlock .videos-block__container');
let videoTimerId;
function showLoader(event) {
  if (event.target.className.includes('video-title__container')) {
    event.target.classList.add('preview-loading');
    // videoTimerId = setTimeout(() => {
      let videoElement = document.createElement('video');
      videoElement.src = './dist/videos/097 - That\'s My Mommy (1955)_New.mov';
      // videoElement.autoplay = true;
      videoElement.muted = true;
      videoElement.playsinline = true;
      videoElement.controls = false;
      videoElement.disablepictureinpicture = true;
      // videoElement.preload = 'none';
      videoElement.style.visibility = 'hidden';
      videoElement.addEventListener('loadeddata', (e) => {
        // hideLoader(event.target);
        // event.target.querySelector('img').style.visibility = 'hidden';
        // event.target.querySelector('.video-title__block-over').style.visibility = 'hidden';
    });
      // event.target.querySelector('img').style.visibility = 'hidden';
      // event.target.querySelector('.video-title__block-over').style.visibility = 'hidden';
      event.target.insertAdjacentElement('afterbegin', videoElement);
      if (videoElement.pictureInPictureElement) {
        videoElement.exitPictureInPicture();
      }
      playVideo = videoElement.play()
        .then(() => {
          hideLoader(event.target);
          event.target.querySelector('img').style.visibility = 'hidden';
          event.target.querySelector('.video-title__block-over').style.display = 'none';
    // event.target.querySelector('.video-title__block-over').style.visibility = 'hidden';
          videoElement.style.visibility = 'visible';
        })
        .catch(e => console.log(e));
    // }, 1000);
  }
}

function hideLoader(target) {
    target.classList.remove('preview-loading');
}

function removeVideo(event) {
  if (event.target.className.includes('video-title__container')) {
    let videoElement = event.target.querySelector('video');
    if (videoTimerId) {
      clearTimeout(videoTimerId);
    }
    if (videoElement) {
      // videoElement.removeEventListener('loadeddata');
      videoElement.remove();
      event.target.querySelector('img').style.visibility = 'visible';
      event.target.querySelector('.video-title__block-over').style.display = 'flex';
    }
    hideLoader(event.target);
  }
}

videosPreviewContainer.addEventListener('mouseover', showLoader);
videosPreviewContainer.addEventListener('mouseout', removeVideo);
