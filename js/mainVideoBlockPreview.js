const mainVideoContainer = document.querySelector('.main-video-block__video');
const mainImageContainer = document.querySelector('.main-video-block__image');
const mainImage = mainImageContainer.querySelector('img');

function handleImageLoading () {
  let videoElement = document.createElement('video');
  videoElement.src = './dist/videos/South_Park_25x06_Hierba_Fegridad_Especial_del_Día_de_San_Patricio.mp4';
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
    })
    .catch(e => console.log(e));
}

mainImage.addEventListener("load", handleImageLoading);
