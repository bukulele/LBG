let selectorIsOpened = false;

function showSelector(event) {
  if (event.target.className.includes('selector__label-container')) {
    // if (selectorIsOpened) {
    //   hideSelector();
    // }
    event.stopImmediatePropagation();
    let selectorContainer = event.target.closest('div[data-selector]');
    let dropdown = selectorContainer.querySelector('.dropdown__container');
    if (dropdown.className.includes('dropdown__container_showed')) {
      hideSelector();
    } else {
      hideSelector();
      dropdown.classList.remove('dropdown__container_hidden');
      dropdown.classList.add('dropdown__container_showed');
      selectorIsOpened = true;
      turnChevron(dropdown);
    }
    // selectorIsOpened = true;
    // // selectorIsOpened = dropdown;
    // dropdown.style.display = 'block';
    // setTimeout(() => {
    //   dropdown.style.transform = 'scaleY(1)';
    //   dropdown.style.opacity = '1';
    // }, 0);
    // turnChevron(selectorContainer);
    document.addEventListener('click', handleClickOutsideSelector);
  }
}

function selectOption(event) {
  if (event.target.className.includes('selector__option')) {
    // event.stopImmediatePropagation();
    let selectorContainer = event.target.closest('div[data-selector]');
    let selectorChoice = selectorContainer.querySelector('.selector__choice p');
    let selectorOption = event.target.querySelector('p');
    // let dropdown = selectorContainer.querySelector('.dropdown__container');
    selectorChoice.innerHTML = selectorOption.innerText;
    // hideSelector();
    // hideSelector(selectorIsOpened);
  }
}

function handleClickOutsideSelector(event) {
  // console.log(event.target);
  let currentTarget = event.target;

  while (typeof currentTarget.className === 'string' && typeof currentTarget.className.includes !== 'undefined' && !currentTarget.className.includes('dropdown__container')) {
    currentTarget = currentTarget.parentNode;
    console.log(currentTarget);
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
  // console.log('wob');
  let openedDropdowns = document.querySelectorAll('.dropdown__container');
  openedDropdowns.forEach(dropdown => {
    let elementStyles = getComputedStyle(dropdown);
    if (dropdown.className.includes('dropdown__container_showed')) {
      // let dropdownContainer = element.closest('div[data-selector]');
      // hideSelector(element);
      dropdown.classList.remove('dropdown__container_showed');
      dropdown.classList.add('dropdown__container_hidden');
      turnChevron(dropdown);
      // element.style.transform = 'scaleY(0.9)';
      // element.style.opacity = '0';
      // setTimeout(() => {
      //   element.style.display = 'none';
      //   // selectorIsOpened = null;
      // }, 200);
    }
  });
  // dropdown.style.transform = 'scaleY(0.9)';
  // dropdown.style.opacity = '0';
  // setTimeout(() => {
  //   dropdown.style.display = 'none';
  //   // selectorIsOpened = null;
  // }, 200);
  selectorIsOpened = false;
  document.removeEventListener('click', handleClickOutsideSelector);
}

function turnChevron(dropdown) {
  let selectorContainer = dropdown.closest('div[data-selector]');
  let chevron = selectorContainer.querySelector('.selector__chevron');
  if (dropdown.className.includes('dropdown__container_showed')) {
    chevron.classList.add('selector__chevron_turned');
  } else {
    chevron.classList.remove('selector__chevron_turned');
  }
}

document.addEventListener('click', showSelector);
// document.addEventListener('click', handleClickOutsideSelector);
document.addEventListener('click', selectOption);
