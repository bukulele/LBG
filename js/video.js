let videoContainer = document.querySelector('.watch-video-block__video-container');
let videoControlPanel = document.querySelector('.watch-video-block__control-panel');
let getFullAccessBlock = videoContainer.querySelector('.video-container__get-access');
let getFullAccessCloseButton = getFullAccessBlock.querySelector('.get-access__close');
let videoBlockOver =videoContainer.querySelector('.video-container__block-over');
let videoContainerImage = videoContainer.querySelector('img');
let videoContainerVideo = videoContainer.querySelector('video');
let playVideoButton = videoContainer.querySelector('.controls__play-container');
let videoContainerHeight;
let windowWidth;

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

function playVideo(event) {
  videoContainerImage.style.display = 'none';
  videoBlockOver.style.display = 'none';
  videoContainerVideo.style.display = 'block';
  videoContainerVideo.play();
}

playVideoButton.addEventListener('click', playVideo);
