// var videosPreviewContainer = document.querySelector('#videosBlock .videos-block__container');
// let videoTimerId;
let currentTarget = null;

function showLoader(event) {
  if (event.target.className.includes('video-title__container')) {
    
    if (currentTarget) return;

    currentTarget = event.target;
    event.target.classList.add('preview-loading');
    // videoTimerId = setTimeout(() => {
      let videoElement = event.target.querySelector('.video-title__video video');
      videoElement.src = './dist/videos/097 - That\'s My Mommy (1955)_New.mov';
    // videoElement.setAttribute('webkit-playsinline', '');
    //   event.target.insertAdjacentElement('afterbegin', videoElement);
    //   if (videoElement.pictureInPictureElement) {
    //     videoElement.exitPictureInPicture();
    //   }
      videoElement.play()
        .then(() => {
          hideLoader(event.target);
          event.target.querySelector('.video-title__image').style.display = 'none';
          event.target.querySelector('.video-title__video').style.display = 'flex';
        })
        .catch(e => console.log(e));
    // }, 1000);

    // Prevent fullscreen when playing
    // videoElement.addEventListener("webkitbeginfullscreen", function () {
    //   if (!videoElement.webkitDisplayingFullscreen) {
    //     videoElement.webkitEnterFullScreen();
    //   }
    // });
  }
}

function hideLoader(target) {
    target.classList.remove('preview-loading');
}

function removeVideo(event) {
  if (event.target.className.includes('video-title__container')) {
    let relatedTarget = event.relatedTarget;

    while (relatedTarget) {
      if (relatedTarget === currentTarget) return;

      relatedTarget = relatedTarget.parentNode;
    }
    // console.log('OUT');
    let videoElement = event.target.querySelector('.video-title__video video');
    videoElement.pause();
    // videoElement.src='';
    event.target.querySelector('.video-title__image').style.display = 'flex';
    event.target.querySelector('.video-title__video').style.display = 'none';
    // if (videoTimerId) {
    //   clearTimeout(videoTimerId);
    // }
    // if (videoElement) {
      // videoElement.removeEventListener('loadeddata');
      // videoElement.remove();
      // event.target.querySelector('img').style.visibility = 'visible';
      // event.target.querySelector('.video-title__block-over').style.display = 'flex';
    // }
    hideLoader(event.target);
    currentTarget = null;
  }
}

document.addEventListener('mouseover', showLoader);
document.addEventListener('mouseout', removeVideo);

