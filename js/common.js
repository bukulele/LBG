
let lengthControlTexts = document.querySelectorAll('.control-length__text');
let tooltip = null;
let arrow = null;
let fullLengthTexts = [];

lengthControlTexts.forEach((element, index) => {
  fullLengthTexts[index] = element.innerText;
  controlTextLength(element, index);
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

function controlTextLength(container, index) {
  let text;
  if (container.innerText.length > 380) {
    text = container.innerText.slice(0, 380).trim() + '\u2026 \u00A0';
  }
  let readMoreButton = document.createElement('span');
  readMoreButton.innerText = 'Read more';
  readMoreButton.classList.add('btn--text');
  readMoreButton.setAttribute('full-text-index', index);
  readMoreButton.addEventListener('click', showMoreText);
  container.innerText = text;
  container.insertAdjacentElement('beforeend', readMoreButton);
}

function showMoreText(event) {
  let readMoreButton = event.target;
  let textIndex = readMoreButton.getAttribute('full-text-index');
  let readMoreButtonContainer = readMoreButton.closest('.watch-video-block__text');
  let textContainerWidth = readMoreButtonContainer.offsetWidth;
  let textBlock = readMoreButtonContainer.querySelector('.control-length__text');
  readMoreButtonContainer.style.height = `${textBlock.offsetHeight}px`;
  textBlock.innerText = fullLengthTexts[textIndex];
  readMoreButtonContainer.style.height = `${textBlock.offsetHeight}px`;
  // let textBlockStyles = getComputedStyle(textBlock);
  // let extendedText = document.createElement('p');
  // extendedText.style.width = `${textContainerWidth}px`;
  // extendedText.style.fontSize = `${textBlockStyles.fontSize}px`;
  // extendedText.style.fontWeight = `${textBlockStyles.fontWeight}px`;
  // extendedText.style.position = 'fixed';
  // extendedText.style.opacity = 0;
  // console.log(lengthControlTexts[textIndex]);
  // extendedText.innerText = fullLengthTexts[textIndex];
  // readMoreButtonContainer.insertAdjacentElement('afterbegin', extendedText);
  // let newReadMoreButtonContainerHeight = extendedText.offsetHeight;
  // readMoreButtonContainer.querySelector('.control-length__text').remove();
  // readMoreButtonContainer.style.height = `${newReadMoreButtonContainerHeight}px`;
  // extendedText.style.position = 'relative';
  // extendedText.style.opacity = 1;
  // console.log(newReadMoreButtonContainerHeight);
}

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);
document.addEventListener('scroll', hideTooltip);
