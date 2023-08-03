let videoContainer = document.querySelector('.watch-video-block__video-container');
let videoContainerHeight = videoContainer.offsetHeight;
let videoControlPanel = document.querySelector('.watch-video-block__control-panel');
let windowWidth = window.innerWidth;

defineElementsDimensions();

window.addEventListener('resize', defineElementsDimensions);


function setControlPanelMinHeight () {
  if (windowWidth >= 1510) {
    videoControlPanel.style.minHeight = `${videoContainerHeight}px`;
  } else {
    videoControlPanel.style.minHeight = 'fit-content';
  }
}

function defineElementsDimensions () {
  windowWidth = window.innerWidth;
  setControlPanelMinHeight();
}
