const mainVideoContainer = document.querySelector('.main-video-block__video');
const mainImageContainer = document.querySelector('.main-video-block__image');
const mainImage = mainImageContainer.querySelector('img');
const muteButton = document.querySelector('.main-video-block__sound');

function handleImageLoading () {
  let videoElement = document.createElement('video');
  videoElement.src = './dist/videos/South_Park_25x06_Hierba_Fegridad_Especial_del_Día_de_San_Patricio.mp4';
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.playsinline = true;
  videoElement.controls = false;
  videoElement.disablepictureinpicture = true;
  videoElement.style.display = 'none';
  mainVideoContainer.insertAdjacentElement('afterbegin', videoElement);
  videoElement.play()
    .then(() => {
      mainImageContainer.style.display = 'none';
      videoElement.style.display = 'block';
      muteButton.style.display = 'block';
    })
    .catch(e => console.log(e));
}

function toggleMute (event) {
  let videoElement = document.querySelector('.main-video-block__video video');
  if (event.target.className.includes('main-video-block__sound--muted')) {
    event.target.classList.remove('main-video-block__sound--muted', 'main-video-block__sound--color-red');
    videoElement.muted = true;
  } else if (event.target.className.includes('main-video-block__sound') && !event.target.className.includes('main-video-block__sound--muted')) {
    event.target.classList.add('main-video-block__sound--muted', 'main-video-block__sound--color-red');
    videoElement.muted = false;
  }
}

mainImage.addEventListener('load', handleImageLoading);
muteButton.addEventListener('click', toggleMute);
