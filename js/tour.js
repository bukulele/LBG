let tourTitlesContainer = document.querySelector('.tour-block__titles');

function showBlockOver (event) {
  if (event.target !== tourTitlesContainer && event.target.className.includes('tour-block__title')) {
    let blockOver = event.target.querySelector('.tour-block__over');
    blockOver.style.display = 'flex';
  }
}

function hideBlockOver (event) {
  if (event.target !== tourTitlesContainer && event.target.className.includes('tour-block__title')) {
    let blockOver = event.target.querySelector('.tour-block__over');
    blockOver.style.display = 'none';
  }
}

tourTitlesContainer.addEventListener('mouseover', showBlockOver);
tourTitlesContainer.addEventListener('mouseout', hideBlockOver);
