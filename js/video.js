let videoContainer = document.querySelector('.watch-video-block__video-container');
let videoControlPanel = document.querySelector('.watch-video-block__control-panel');
let videoContainerHeight;
let windowWidth;

const resizeObserver = new ResizeObserver((entries) => {

  const entry = entries[0];

  videoContainerHeight = entry.contentRect.height;
  windowWidth = window.innerWidth;

  setControlPanelMinHeight();
});

resizeObserver.observe(videoContainer);

function setControlPanelMinHeight () {
  if (windowWidth >= 1510) {
    videoControlPanel.style.minHeight = `${videoContainerHeight}px`;
  } else {
    videoControlPanel.style.minHeight = 'fit-content';
  }
}
