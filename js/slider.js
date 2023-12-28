// SET SIZE OF SLIDER ELEMENTS IN LINE WITH VIDEOS TITLES
let sliderElementReference = document.querySelector('.video-title__container');
let sliderElementAll = document.querySelectorAll('.slider-element__container');

const startingElementNumber = 2;
let sliderBlock = document.querySelectorAll('.slider-block__slider');
setSliders(sliderBlock, sliderElementAll);

function setSliders(sliderBlock, sliderElementAll) {
  for (let elem of sliderElementAll) {
    elem.style.width = `${sliderElementReference.offsetWidth}px`;
  }

  for (let slider of sliderBlock) {
    defineSlider(slider);
  }
}

function defineSlider(slider) {
  let currentSlide = startingElementNumber;
  let sliderGroup = slider.closest('.slider-block__slider-group');
  let sliderElement_1 = slider.querySelector(`.slider-element__container:nth-child(${startingElementNumber})`);
  let slideWidth = sliderElement_1.offsetWidth;
  slider.style.left = `${-slider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2}px`;
  slider.dataset.currentSlide = String(currentSlide);
  slider.dataset.slideWidth = String(slideWidth);
}

function moveSlides(event) {
  if (event.target.className.includes('slider-block__slide-left')) {
    moveSlidesLeft(event);
  } else if (event.target.className.includes('slider-block__slide-right')) {
    moveSlidesRight(event);
  }
}

function moveSlidesLeft(event) {
  event.preventDefault();
  let sliderGroup = event.target.closest('.slider-block__slider-group');
  let currentSlider = event.target.closest('.slider-block__container').querySelector('.slider-block__slider');
  let currentSlide = Number(currentSlider.dataset.currentSlide);
  let slideWidth = Number(currentSlider.dataset.slideWidth);
  let numberOfSlides = currentSlider.children.length;
  addAnimation(currentSlider);
  if (currentSlide === 2) {
    removeAnimation(currentSlider);
    currentSlide = numberOfSlides - 1;
    currentSlider.style.left = `${-currentSlider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2 - 1}px`;
    currentSlide -= 1;
    setTimeout(() => {
      addAnimation(currentSlider);
      currentSlider.style.left = `${-currentSlider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2 - 1}px`;
    }, 0);
  } else {
    currentSlide -= 1;
    currentSlider.style.left = `${-currentSlider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2 - 1}px`;
  }
  currentSlider.dataset.currentSlide = String(currentSlide);
}

function moveSlidesRight(event) {
  event.preventDefault();
  let sliderGroup = event.target.closest('.slider-block__slider-group');
  let currentSlider = event.target.closest('.slider-block__container').querySelector('.slider-block__slider');
  let currentSlide = Number(currentSlider.dataset.currentSlide);
  let slideWidth = Number(currentSlider.dataset.slideWidth);
  let numberOfSlides = currentSlider.children.length;

  addAnimation(currentSlider);
  if (currentSlide + 2 === numberOfSlides) {
    currentSlide += 1;
    currentSlider.style.left = `${-currentSlider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2 - 1}px`;
    currentSlide = 2;
    setTimeout(() => {
      removeAnimation(currentSlider);
      currentSlider.style.left = `${-currentSlider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2 - 1}px`;
    }, 200);
  } else {
    currentSlide += 1;
    currentSlider.style.left = `${-currentSlider.children[currentSlide - 1].offsetLeft - slideWidth / 2 + sliderGroup.offsetWidth / 2 - 1}px`;
  }
  currentSlider.dataset.currentSlide = String(currentSlide);
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

function handleWindowResize() {
  setSliders(sliderBlock, sliderElementAll);
}

function handleSliderTouch(event) {
  let currentTarget = event.target;

  if (currentTarget.className.includes('slider-block__slider-group')) {
    return;
  }

  while (event.target.className && typeof event.target.className.includes !== 'undefined' && !currentTarget.className.includes('slider-block__slider')) {
    currentTarget = currentTarget.parentNode;
  }
  if (currentTarget.className.includes('slider-block__slider')) {
    console.log(currentTarget);
  }

  if (event.target.className.includes('btn--slider')) {
    event.preventDefault();
    moveSlides(event);
  }
}

document.addEventListener('click', moveSlides);
document.addEventListener('touchstart', handleSliderTouch, {passive: false});
window.addEventListener('resize', handleWindowResize);
