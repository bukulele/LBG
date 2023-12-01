// initialization
let windowWidth = window.outerWidth;
window.addEventListener('load', createObserver);
window.addEventListener('resize', handleVideoPreviewResize);

let currentlyPlayingVideoPreview;
let videosPlaying = [];

let loaderTimerId = null;

// getting url for preload
let videoPreviewContainers = document.querySelectorAll('.video-title__container');

// observers
let videoContainersObserver;
let videoPreviewObserver;

function createObserver() {
  videoContainersObserver = new IntersectionObserver(handleIntersect);
  videoPreviewObserver = new IntersectionObserver(mobilePreviewIntersect, {
    threshold: 0.9,
  });

  // observe elements for preloading video previews
  videoPreviewContainers.forEach(element => {
    videoContainersObserver.observe(element);
  });

  // observe elements for autoplay video preview on mobile screen
  videoPreviewContainers.forEach(element => {
    videoPreviewObserver.observe(element);
  });
}

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.querySelector('video')) {
      let videoContainer = entry.target;
      let imgRef = entry.target.querySelector('img[data-preview]');
      if (imgRef) {
        let source = imgRef.dataset.preview;
        let videoElement = document.createElement('video');
        videoElement.preload = 'auto';
        videoElement.src = source;
        videoElement.controls = !1;
        videoElement.muted = !0;
        videoElement.loop = !0;
        videoElement.disablePictureInPicture = !0;
        videoElement.controlsList = 'nodownload';
        videoElement.setAttribute('webkit-playsinline', 'true');
        videoElement.setAttribute('playsinline', 'true');
        videoContainer.insertAdjacentElement('beforeend', videoElement);
      }
      videoContainersObserver.unobserve(entry.target);
    }
  });
}

function defineTargetVideoToShow(event) {
  let clientY;
  if (event.type === 'touchmove') {
    clientY = event.changedTouches[0].clientY;
  }

  let targetIsVideo = event.target.className &&
    typeof event.target.className.includes !== 'undefined' &&
    event.target.className.includes('video-title__container');

  if ((targetIsVideo && !clientY) || (windowWidth > 430 && targetIsVideo && Math.abs(clientY - startYTouchPosition) > 40)) {
    let videoElement = event.target.querySelector('video');
    if (videoElement && currentlyPlayingVideoPreview !== videoElement) {
      if (currentlyPlayingVideoPreview) {
        hideLoader(currentlyPlayingVideoPreview.parentNode);
      }
      hideVideoPreview(currentlyPlayingVideoPreview);
      currentlyPlayingVideoPreview = videoElement;
      showLoader(event.target);
      showVideoPreview(currentlyPlayingVideoPreview);
    }
  }
}

function defineTargetVideoToHide(event) {
  if (event.target.className && typeof event.target.className.includes !== 'undefined' && event.target.className.includes('video-preview')) {
    let videoElement = event.target.parentNode.querySelector('video');
    currentlyPlayingVideoPreview = null;
    hideLoader(event.target);
    hideVideoPreview(videoElement);
  }
}

function showVideoPreview(video) {
  if (video) {
    let videoContainer = video.parentNode;
    let imgRef = videoContainer.querySelector('img[data-preview]');
    video.play()
      .then(() => {
        hideVideoInfo(videoContainer);
        hideLoader(videoContainer);
        // video.style.visibility = 'visible';
        video.setAttribute('height', imgRef.offsetHeight);
        videoContainer.querySelector('.video-title__image').style.display = 'none';
        videoContainer.querySelector('.video-title__video').style.display = 'flex';
      })
      .catch(e => {
        return;
      });
  }
}

function hideVideoPreview(video) {
  if (video) {
    let videoContainer = video.parentNode;
    showVideoInfo(videoContainer);
    video.pause();
    video.currentTime = 0;
    // video.style.visibility = 'hidden';
    videoContainer.querySelector('.video-title__image').style.display = 'flex';
    videoContainer.querySelector('.video-title__video').style.display = 'none';
  }
}

document.addEventListener('mouseover', defineTargetVideoToShow);
document.addEventListener('mouseout', defineTargetVideoToHide);


// handling touch events
let startYTouchPosition;

function handleTouchVideoPreview(event) {
  if (event.target.className && typeof event.target.className.includes !== 'undefined' && event.target.className.includes('video-preview')) {
    startYTouchPosition = event.changedTouches[0].clientY;
  }
}

function handleVideoPreviewResize() {
  if (windowWidth !== window.outerWidth) {
    hideVideoPreview(currentlyPlayingVideoPreview);
    currentlyPlayingVideoPreview = null;

    videosPlaying.forEach(video => {
      hideVideoPreview(video);
    });
    videosPlaying = [];

    windowWidth = window.outerWidth;
  }
}

function showLoader(container) {
  if (!container.className.includes('preview-loading')) {
    container.classList.add('preview-loading');
  }
}

function hideLoader(container) {
  if (loaderTimerId) {
    clearTimeout(loaderTimerId);
  }
  if (container.className.includes('preview-loading')) {
    container.classList.remove('preview-loading');
  }
}

document.addEventListener('touchstart', handleTouchVideoPreview);
document.addEventListener('touchmove', defineTargetVideoToShow);

// handling video preview on mobile scrolling

function mobilePreviewIntersect(entries) {
  if (windowWidth <= 430) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let videoContainer = entry.target.querySelector('.video-title__container');
        // if (videoContainer) {
        //   showLoader(videoContainer);
        // }
        let videoElement = entry.target.querySelector('video');
        if (videoElement && videoContainer) {
          showLoader(videoContainer);
        }
        if (videoElement && !videosPlaying.includes(videoElement)) {
          videosPlaying.push(videoElement);
          showVideoPreview(videoElement);
        }
      } else {
        let videoElement = entry.target.querySelector('video');
        if (videoElement && videosPlaying.includes(videoElement)) {
          let idxToRemove = videosPlaying.indexOf(videoElement);
          hideLoader(videoElement.parentNode);
          videosPlaying[idxToRemove] = null;
          hideVideoPreview(videoElement);
        }
      }
    });
  }
}

// hiding info over video

function hideVideoInfo(container) {
  console.log('hideVideoInfo');
  // let videoInfo = container.querySelector('.thumb-spot__duration-block');
  // if (!videoInfo.className.includes('thumb-spot__hidden')) {
  //   videoInfo.classList.add('thumb-spot__hidden');
  // }
}

function showVideoInfo(container) {
  console.log('showVideoInfo');
  // let videoInfo = container.querySelector('.thumb-spot__duration-block');
  // if (videoInfo.className.includes('thumb-spot__hidden')) {
  //   videoInfo.classList.remove('thumb-spot__hidden');
  // }
}



// let currentTarget = null;
//
// function showLoader(event) {
//   if (event.target.className.includes('video-title__container')) {
//
//     if (currentTarget) return;
//     currentTarget = event.target;
//
//     event.target.classList.add('preview-loading');
//
//     let videoElement = event.target.querySelector('.video-title__video video');
//     videoElement.src = './dist/videos/097 - That\'s My Mommy (1955)_New.mov';
//     videoElement.play()
//       .then(() => {
//         hideLoader(event.target);
//         event.target.querySelector('.video-title__image').style.display = 'none';
//         event.target.querySelector('.video-title__video').style.display = 'flex';
//       })
//       .catch(e => {
//         return;
//       });
//   }
// }
//
// function hideLoader(target) {
//   target.classList.remove('preview-loading');
// }
//
// function removeVideo(event) {
//   if (event.target.className.includes('video-title__container')) {
//     let relatedTarget = event.relatedTarget;
//
//     while (relatedTarget) {
//       if (relatedTarget === currentTarget) return;
//
//       relatedTarget = relatedTarget.parentNode;
//     }
//
//     let videoElement = event.target.querySelector('.video-title__video video');
//     videoElement.pause();
//
//     event.target.querySelector('.video-title__image').style.display = 'flex';
//     event.target.querySelector('.video-title__video').style.display = 'none';
//     hideLoader(event.target);
//
//     currentTarget = null;
//   }
// }
//
// document.addEventListener('mouseover', showLoader);
// document.addEventListener('mouseout', removeVideo);
//
