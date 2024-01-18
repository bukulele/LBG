let lengthControlTexts = document.querySelectorAll('.control-length__text');
let tooltip = null;
let arrow = null;

lengthControlTexts.forEach(element => {
  controlTextLength(element);
});

function showTooltip (event) {
  if (event.target.dataset.icon) {
    let targetPositionTop = event.target.getBoundingClientRect().top;
    let targetPositionLeft = event.target.getBoundingClientRect().left;

    tooltip = document.createElement('div');
    tooltip.classList.add('icon-tooltip');
    tooltip.innerHTML = `<p>${event.target.dataset.icon}</p>`;

    document.querySelector('body').insertAdjacentElement('beforeend', tooltip);

    if (tooltip.offsetWidth + targetPositionLeft >= window.innerWidth) {
      tooltip.style.left = `${targetPositionLeft + event.target.offsetWidth - tooltip.offsetWidth}px`;
    } else {
      tooltip.style.left = `${targetPositionLeft}px`;
    }
    tooltip.style.top = `${targetPositionTop + event.target.offsetHeight + 10}px`;

    arrow = document.createElement('div');
    arrow.classList.add('icon-tooltip__arrow');
    arrow.style.left = `${targetPositionLeft + event.target.offsetWidth / 2}px`;
    arrow.style.top = `${targetPositionTop + event.target.offsetHeight - 3}px`;
    document.querySelector('body').insertAdjacentElement('beforeend', arrow);
  }
}

function hideTooltip () {
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
  if (arrow) {
    arrow.remove();
    arrow = null;
  }
}

function showLoader(container) {
  if (!container.className.includes('preview-loading')) {
    container.classList.add('preview-loading');
  }
}

function hideLoader(container) {
  if (container.className.includes('preview-loading')) {
    container.classList.remove('preview-loading');
  }
}

function controlTextLength(container) {
  let text;
  if (container.innerText.length > 380) {
    text = container.innerText.slice(0, 380) + '... ';
  }
  let readMoreButton = document.createElement('span');
  readMoreButton.innerText = 'Read more';
  readMoreButton.classList.add('btn--text');
  // readMoreButton.addEventListener('click', showMoreText);
  container.innerText = text;
  container.insertAdjacentElement('beforeend', readMoreButton);
}

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);
document.addEventListener('scroll', hideTooltip);
