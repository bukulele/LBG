let filtersBlocks = document.querySelectorAll('.filters-block');

for (let filtersBlock of filtersBlocks) {

  let selectors = document.querySelectorAll('.filters-block select');

  for (let selector of selectors) {
    adjustWidth(selector);
  }

  filtersBlock.addEventListener('change', handleSelect);

  function handleSelect(event) {
    adjustWidth(event.target);
  }

  function adjustWidth(elem) {
    let compStyles = window.getComputedStyle(elem);
    let elemFontSize = compStyles.getPropertyValue('font-size');
    let selectedOptionText = elem.options[elem.selectedIndex].text;
    let fakeElement = document.createElement("span");
    fakeElement.style.visibility = "hidden";
    fakeElement.style.whiteSpace = "nowrap";
    fakeElement.style.fontSize = elemFontSize;
    fakeElement.innerHTML = selectedOptionText;
    document.body.appendChild(fakeElement);
    let width = fakeElement.offsetWidth;
    document.body.removeChild(fakeElement);
    elem.style.width = `${width + 30}px`;
  }
}
