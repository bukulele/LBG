// let sliderImages = document.querySelector('.slider-block__slider');
const startingElementNumber = 2;
let sliderBlockContainer = document.querySelector('#page-container > div > slider-block').shadowRoot.querySelector('.slider-block__container');
let sliderImages = document.querySelector("#page-container > div > slider-block").shadowRoot.querySelector(".slider-block__slider");
let gapBetweenSlides = Number(window.getComputedStyle(sliderImages).gap.slice(0, -2));
let numberOfSlides = sliderImages.children.length;
let currentSlide = startingElementNumber;

let windowWidth = window.innerWidth;
let sliderElement_2 = document.querySelector(`#page-container > div > slider-block > slider-element:nth-child(${startingElementNumber + 1})`).shadowRoot.querySelector(".slider-element__container");
let sliderElement_butOne = document.querySelector(`#page-container > div > slider-block > slider-element:nth-child(${numberOfSlides})`).shadowRoot.querySelector(".slider-element__container");
let initialPosition = (windowWidth - sliderElement_2.offsetWidth) / 2 - sliderElement_2.offsetLeft;
let butOnePosition = (windowWidth - sliderElement_2.offsetWidth) / 2 - sliderElement_butOne.offsetLeft;

sliderImages.style.left = `${initialPosition}px`;

let buttonLeft = sliderBlockContainer.querySelector('.slider-block__slide-left');
let buttonRight = sliderBlockContainer.querySelector('.slider-block__slide-right');

buttonLeft.addEventListener('click', moveSlidesLeft);
buttonRight.addEventListener('click', moveSlidesRight);

function moveSlidesLeft () {
  addAnimation(sliderImages);
  if (currentSlide === 2) {
    removeAnimation(sliderImages);
    sliderImages.style.left = `${butOnePosition}px`;
    currentSlide = numberOfSlides - 2;
    setTimeout(() => {
      addAnimation(sliderImages);
      sliderImages.style.left = `${sliderImages.offsetLeft + sliderElement_2.offsetWidth + gapBetweenSlides}px`;
    }, 0);
  } else {
    currentSlide -= 1;
    sliderImages.style.left = `${sliderImages.offsetLeft + sliderElement_2.offsetWidth + gapBetweenSlides}px`;
  }
}
function moveSlidesRight () {
  addAnimation(sliderImages);
  if (currentSlide + 2 === numberOfSlides) {
    currentSlide = 2;
    sliderImages.style.left = `${sliderImages.offsetLeft - sliderElement_2.offsetWidth - gapBetweenSlides}px`;
    setTimeout(() => {
      removeAnimation(sliderImages);
      sliderImages.style.left = `${initialPosition}px`;
      }, 200);
  } else {
    currentSlide += 1;
    sliderImages.style.left = `${sliderImages.offsetLeft - sliderElement_2.offsetWidth - gapBetweenSlides}px`;
  }
}

function addAnimation(elem) {
  if (!elem.className.includes('slider--animated')) {
    elem.classList.add('slider--animated');
  }
}

function removeAnimation(elem) {
  if (elem.className.includes('slider--animated')) {
    elem.classList.remove('slider--animated');
  }
}
