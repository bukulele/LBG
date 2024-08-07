let currentTarget = null;

function showLoader(event) {
  if (event.target.className.includes('video-title__container')) {

    if (currentTarget) return;
    currentTarget = event.target;

    event.target.classList.add('preview-loading');

    let videoElement = event.target.querySelector('.video-title__video video');
    videoElement.src = './dist/videos/097 - That\'s My Mommy (1955)_New.mov';
    videoElement.play()
      .then(() => {
        hideLoader(event.target);
        event.target.querySelector('.video-title__image').style.display = 'none';
        event.target.querySelector('.video-title__video').style.display = 'flex';
      })
      .catch(e => {
        return;
      });
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

    let videoElement = event.target.querySelector('.video-title__video video');
    videoElement.pause();

    event.target.querySelector('.video-title__image').style.display = 'flex';
    event.target.querySelector('.video-title__video').style.display = 'none';
    hideLoader(event.target);

    currentTarget = null;
  }
}

document.addEventListener('mouseover', showLoader);
document.addEventListener('mouseout', removeVideo);
