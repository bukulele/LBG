let tooltip = null;
let arrow = null;

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

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);
document.addEventListener('scroll', hideTooltip);
