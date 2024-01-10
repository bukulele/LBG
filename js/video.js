let videoContainer = document.querySelector('.watch-video-block__video-container');
let videoControls = videoContainer.querySelector('.video-container__controls');
let videoControlPanel = document.querySelector('.watch-video-block__control-panel');
let getFullAccessBlock = videoContainer.querySelector('.video-container__get-access');
let getFullAccessCloseButton = getFullAccessBlock.querySelector('.get-access__close');
let videoBlockOver =videoContainer.querySelector('.video-container__block-over');
let videoContainerImage = videoContainer.querySelector('img');
let videoContainerVideo = videoContainer.querySelector('video');
let playVideoButton = videoContainer.querySelector('.controls__play-container');
let videoContainerHeight;
let windowWidth;

videoContainerVideo.controlsList = 'nodownload';

const resizeObserver = new ResizeObserver((entries) => {

  const entry = entries[0];

  videoContainerHeight = entry.contentRect.height;
  windowWidth = window.innerWidth;

  setControlPanelMinHeight();
});

resizeObserver.observe(videoContainer);

getFullAccessCloseButton.addEventListener('click', closeFullAccessBlock);

function setControlPanelMinHeight () {
  if (windowWidth >= 1510) {
    videoControlPanel.style.minHeight = `${videoContainerHeight}px`;
  } else {
    videoControlPanel.style.minHeight = 'fit-content';
  }
}

function closeFullAccessBlock () {
  getFullAccessBlock.style.display = 'none';
}

function playVideo() {
  videoBlockOver.style.display = 'none';
  showLoader(videoContainer);
  videoContainerVideo.play()
    .then(() => {
      hideLoader(videoContainer);
      videoContainerImage.style.display = 'none';
      videoContainerVideo.style.display = 'block';
    });
}

function highlightPlayButton() {
  playVideoButton.classList.add('controls__play-container_focused');
}
function shadePlayButton() {
  playVideoButton.classList.remove('controls__play-container_focused');
}
function videoPauseHandler() {
  videoBlockOver.style.display = 'flex';
}

videoControls.addEventListener('mouseover', highlightPlayButton);
videoControls.addEventListener('mouseout', shadePlayButton);
videoControls.addEventListener('click', playVideo);
// videoContainerVideo.addEventListener('click', videoPauseHandler);
videoContainerVideo.addEventListener('pause', videoPauseHandler);
videoContainerVideo.addEventListener('play', playVideo);
videoContainerVideo.addEventListener('contextmenu', event => {
  event.preventDefault();
});
// document.addEventListener('mouseover', (event => console.log(event.target)));
