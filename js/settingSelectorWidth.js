let filtersBlock = document.querySelector('.videos-block__filters');
let selectors = document.querySelectorAll('.videos-block__selector select');

for (let selector of selectors) {
  adjustWidth(selector);
}

filtersBlock.addEventListener('change', handleSelect);

function handleSelect (event) {
  adjustWidth(event.target);
}

function adjustWidth (elem) {
  let selectedOptionText = elem.options[elem.selectedIndex].text;
  let fakeElement = document.createElement("span");
  fakeElement.style.visibility = "hidden";
  fakeElement.style.whiteSpace = "nowrap";
  fakeElement.innerHTML = selectedOptionText;
  document.body.appendChild(fakeElement);
  let width = fakeElement.offsetWidth;
  document.body.removeChild(fakeElement);
  elem.style.width = `${width + 20}px`;
}
