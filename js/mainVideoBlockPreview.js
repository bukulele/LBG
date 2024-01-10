const mainVideoContainer = document.querySelector('.main-video-block__video');
const mainImageContainer = document.querySelector('.main-video-block__image');
const mainImage = mainImageContainer.querySelector('img');
const muteButton = document.querySelector('.main-video-block__sound');
// alert('Preview Loaded');

mainImage.onload = handleImageLoading;
if (mainImage.complete) {
  handleImageLoading();
}

function handleImageLoading () {
  // alert('Image loaded');
  let videoElement = mainVideoContainer.querySelector('video');
  videoElement.src = './dist/videos/South_Park_25x06_Hierba_Fegridad_Especial_del_Día_de_San_Patricio.mp4';
  // videoElement.loop = true;
  // videoElement.muted = true;
  // videoElement.playsinline = true;
  // videoElement.controls = false;
  videoElement.disablepictureinpicture = !0;
  videoElement.controlsList = 'nodownload';
  // videoElement.autoPlay = true;
  // videoElement.type = 'video/mp4';
  // videoElement.setAttribute('webkit-playsinline', 'true');
  mainVideoContainer.insertAdjacentElement('afterbegin', videoElement);
  // mainImageContainer.style.display = 'none';
  // mainVideoContainer.style.display = 'block';
  videoElement.play()
    .then(() => {
      mainImageContainer.style.display = 'none';
      mainVideoContainer.style.display = 'flex';
      muteButton.style.display = 'block';
    })
    .catch(e => {
      return;
    });
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

// mainImage.addEventListener('load', handleImageLoading);
muteButton.addEventListener('click', toggleMute);
