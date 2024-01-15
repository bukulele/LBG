let selectorIsOpened = false;

function showSelector(event) {
  if (event.target.className.includes('selector__label-container')) {
    if (selectorIsOpened) {
      hideSelector();
    }
    event.stopImmediatePropagation();
    let selectorContainer = event.target.closest('div[data-selector]');
    let dropdown = selectorContainer.querySelector('.dropdown__container');
    selectorIsOpened = true;
    // selectorIsOpened = dropdown;
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
    hideSelector();
    // hideSelector(selectorIsOpened);
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
    // let openedDropdowns = document.querySelectorAll('.dropdown__container');
    // openedDropdowns.forEach(element => {
    //   let elementStyles = getComputedStyle(element);
    //   if (elementStyles.display !== 'none') {
    //     hideSelector(element);
    //   }
    // });
    hideSelector();
  }
}

function hideSelector() {
  let openedDropdowns = document.querySelectorAll('.dropdown__container');
  openedDropdowns.forEach(element => {
    let elementStyles = getComputedStyle(element);
    if (elementStyles.display !== 'none') {
      // hideSelector(element);
      element.style.transform = 'scaleY(0.9)';
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.display = 'none';
        // selectorIsOpened = null;
      }, 200);
    }
  });
  // dropdown.style.transform = 'scaleY(0.9)';
  // dropdown.style.opacity = '0';
  // setTimeout(() => {
  //   dropdown.style.display = 'none';
  //   // selectorIsOpened = null;
  // }, 200);
  selectorIsOpened = false;
}

document.addEventListener('click', showSelector);
document.addEventListener('click', handleClickOutsideSelector);
document.addEventListener('click', selectOption);
