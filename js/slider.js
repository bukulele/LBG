// SET SIZE OF SLIDER ELEMENTS IN LINE WITH VIDEOS TITLES
let sliderElementReference = document.querySelector(".video-title__container");
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
  let gapBetweenSlides = Number(window.getComputedStyle(slider).columnGap.slice(0, -2));
  let currentSlide = startingElementNumber;
  let windowWidth = document.body.clientWidth;
  let sliderElement_1 = slider.querySelector(`.slider-element__container:nth-child(${startingElementNumber})`);
  let slideWidth = sliderElement_1.offsetWidth;
  let initialPosition = (windowWidth) / 2 - slideWidth - gapBetweenSlides * 2 - slideWidth / 2 - 1;
  slider.style.left = `${initialPosition}px`;
  slider.dataset.currentSlide = String(currentSlide);
  slider.dataset.initialPosition = String(initialPosition);
  slider.dataset.slideWidth = String(slideWidth);
  slider.dataset.gapBetweenSlides = String(gapBetweenSlides);
}

function moveSlidesLeft(event) {
  if (event.target.className.includes('slider-block__slide-left')) {
    let currentSlider = event.target.closest('.slider-block__container').querySelector('.slider-block__slider');
    let currentSlide = Number(currentSlider.dataset.currentSlide);
    let slideWidth = Number(currentSlider.dataset.slideWidth);
    let gapBetweenSlides = Number(currentSlider.dataset.gapBetweenSlides);
    let numberOfSlides = currentSlider.children.length;
    console.log(currentSlide);
    addAnimation(currentSlider);
    if (currentSlide === 2) {

      removeAnimation(currentSlider);
      currentSlider.style.left = `${-(slideWidth + gapBetweenSlides) * (numberOfSlides - 3)}px`;
      currentSlide = numberOfSlides - 2;
      setTimeout(() => {
        addAnimation(currentSlider);
        currentSlider.style.left = `${-(slideWidth + gapBetweenSlides) * currentSlide + (slideWidth + gapBetweenSlides) * 2}px`;
        }, 0);
    } else {
      currentSlide -= 1;
      currentSlider.style.left = `${-(slideWidth + gapBetweenSlides) * currentSlide + (slideWidth + gapBetweenSlides) * 2}px`;
    }

    currentSlider.dataset.currentSlide = String(currentSlide);
  }
}

function moveSlidesRight(event) {
  if (event.target.className.includes('slider-block__slide-right')) {
    let currentSlider = event.target.closest('.slider-block__container').querySelector('.slider-block__slider');
    let currentSlide = Number(currentSlider.dataset.currentSlide);
    let initialPosition = Number(currentSlider.dataset.initialPosition);
    let slideWidth = Number(currentSlider.dataset.slideWidth);
    let gapBetweenSlides = Number(currentSlider.dataset.gapBetweenSlides);
    let numberOfSlides = currentSlider.children.length;

    addAnimation(currentSlider);
    if (currentSlide + 2 === numberOfSlides) {
      removeAnimation(currentSlider);
      currentSlider.style.left = `${initialPosition}px`;
      currentSlide = 2;

      setTimeout(() => {
        addAnimation(currentSlider);
        currentSlider.style.left = `${-(slideWidth + gapBetweenSlides) * currentSlide + (slideWidth + gapBetweenSlides)}px`;
      }, 0);
    } else {
      currentSlide += 1;
      currentSlider.style.left = `${-(slideWidth + gapBetweenSlides) * currentSlide + (slideWidth + gapBetweenSlides)}px`;

    }

    currentSlider.dataset.currentSlide = String(currentSlide);
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

function handleWindowResize() {
  setSliders(sliderBlock, sliderElementAll);
}

document.addEventListener('click', moveSlidesLeft);
document.addEventListener('click', moveSlidesRight);
window.addEventListener('resize', handleWindowResize);
