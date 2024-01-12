let selectorIsOpened = null;

function showSelector(event) {
  if (event.target.className.includes('selector__label-container')) {
    event.stopImmediatePropagation();
    let selectorContainer = event.target.closest('div[data-selector]');
    let dropdown = selectorContainer.querySelector('.dropdown__container');
    selectorIsOpened = dropdown;
    dropdown.style.display = 'block';
    setTimeout(() => {
      dropdown.style.transform = 'scaleY(1)';
      dropdown.style.opacity = '1';
    }, 0);
  }
}

function selectOption(event) {
  if (event.target.className.includes('selector__option')) {
    let selectorContainer = event.target.closest('div[data-selector]');
    let selectorChoice = selectorContainer.querySelector('.selector__choice p');
    let dropdown = selectorContainer.querySelector('.dropdown__container');
    selectorChoice.innerHTML = event.target.innerText;
    hideSelector(selectorIsOpened);
  }
}

function handleClickOutsideSelector(event) {
  let currentTarget = event.target;

  while (typeof currentTarget.className === 'string' && typeof currentTarget.className.includes !== 'undefined' && !currentTarget.className.includes('dropdown__container')) {
    currentTarget = currentTarget.parentNode;
    if (currentTarget.className === 'string' && currentTarget.className.includes('dropdown__container')) {
      return;
    }
  }

  if (selectorIsOpened) {
    event.preventDefault();
    hideSelector(selectorIsOpened);
  }
}

function hideSelector(dropdown) {
  dropdown.style.transform = 'scaleY(0.9)';
  dropdown.style.opacity = '0';
  setTimeout(() => {
    dropdown.style.display = 'NONE';
    selectorIsOpened = null;
  }, 200);
}

document.addEventListener('click', showSelector);
document.addEventListener('click', handleClickOutsideSelector);
document.addEventListener('click', selectOption);
