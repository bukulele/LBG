let getFullAccessButton = document.querySelector('#getFullAccessButton');
let videoContainer = document.querySelector('.watch-video-block__video-container');
let videoContainerHeight = videoContainer.offsetHeight;
let videoControlPanel = document.querySelector('.watch-video-block__control-panel');
let windowWidth;

defineElementsDimensions();

window.addEventListener('resize', defineElementsDimensions);


function defineGetFullAccessButtonWidth () {
  windowWidth = document.body.clientWidth;
  if (windowWidth >= 768 && !getFullAccessButton.className.includes('btn--full')) {
    getFullAccessButton.classList.add('btn--full');
  } else if (windowWidth < 768 && getFullAccessButton.className.includes('btn--full')) {
    getFullAccessButton.classList.remove('btn--full');
  }
}

function setControlPanelMinHeight () {
  if (windowWidth >= 1510) {
    videoControlPanel.style.minHeight = `${videoContainerHeight}px`;
  } else {
    videoControlPanel.style.minHeight = 'fit-content';
  }
}

function defineElementsDimensions () {
  defineGetFullAccessButtonWidth();
  setControlPanelMinHeight();
}
