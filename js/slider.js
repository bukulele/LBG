const startingElementNumber = 2;

let sliderElementReference = document.querySelector(".video-title__container");
let sliderElementAll = document.querySelectorAll('.slider-element__container');
for (let elem of sliderElementAll) {
  elem.style.width = `${sliderElementReference.offsetWidth}px`;
}

let sliderBlockContainer = document.querySelector('.slider-block__container');
let sliderImages = document.querySelector(".slider-block__slider");
let gapBetweenSlides = Number(window.getComputedStyle(sliderImages).gap.slice(0, -2));
let numberOfSlides = sliderImages.children.length;
let currentSlide = startingElementNumber;
let windowWidth = document.body.clientWidth;
let sliderElement_1 = document.querySelector(`.slider-block__slider`).querySelector(`.slider-element__container:nth-child(${startingElementNumber})`);
let sliderElement_butOne = document.querySelector(`.slider-block__slider`).querySelector(`.slider-element__container:nth-child(${numberOfSlides - 2})`);
let initialPosition = (windowWidth) / 2 - sliderElement_1.offsetWidth - gapBetweenSlides * 2 - sliderElement_1.offsetWidth / 2 - 1 ;
let butOnePosition = (windowWidth) / 2 - sliderElement_butOne.offsetWidth - gapBetweenSlides * 2 - sliderElement_butOne.offsetWidth / 2 - sliderElement_butOne.offsetLeft - 1;
let buttonLeft = sliderBlockContainer.querySelector('.slider-block__slide-left');
let buttonRight = sliderBlockContainer.querySelector('.slider-block__slide-right');
sliderImages.style.left = `${initialPosition}px`;

buttonLeft.addEventListener('click', moveSlidesLeft);
buttonRight.addEventListener('click', moveSlidesRight);
function moveSlidesLeft () {
  console.log(currentSlide);
  addAnimation(sliderImages);
  if (currentSlide === 2) {
    removeAnimation(sliderImages);
    sliderImages.style.left = `${butOnePosition}px`;
    currentSlide = numberOfSlides - 2;
    setTimeout(() => {
      addAnimation(sliderImages);
      sliderImages.style.left = `${sliderImages.offsetLeft + sliderElement_1.offsetWidth + gapBetweenSlides * 2}px`;
    }, 0);
  } else {
    currentSlide -= 1;
    sliderImages.style.left = `${sliderImages.offsetLeft + sliderElement_1.offsetWidth + gapBetweenSlides}px`;
  }
}
function moveSlidesRight () {
  addAnimation(sliderImages);
  if (currentSlide + 2 === numberOfSlides) {
    currentSlide = 2;
    sliderImages.style.left = `${sliderImages.offsetLeft - sliderElement_1.offsetWidth - gapBetweenSlides}px`;
    setTimeout(() => {
      removeAnimation(sliderImages);
      sliderImages.style.left = `${initialPosition}px`;
      }, 200);
  } else {
    currentSlide += 1;
    sliderImages.style.left = `${sliderImages.offsetLeft - sliderElement_1.offsetWidth - gapBetweenSlides}px`;
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
