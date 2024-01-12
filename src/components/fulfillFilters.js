import dropdown from './dropdown.html';

let allFilterSelectors = document.querySelectorAll('div[data-selector]');

for (let filter of allFilterSelectors) {
  let linksArray = JSON.parse(filter.dataset.selector);

  filter.insertAdjacentHTML('beforeend', dropdown);
  let dropdownContainerList = filter.querySelector('.dropdown__list');
  // let listElement = document.createElement('ul');
  let selectorChoice = filter.querySelector('.selector__choice p');
  selectorChoice.innerHTML = linksArray[0];
  for (let link of linksArray) {
    dropdownContainerList.insertAdjacentHTML('beforeend', `
      <li class="selector__option">${link}</li>
    `);
  }
}
