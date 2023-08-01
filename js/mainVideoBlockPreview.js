let mainImage = document.querySelector('.main-video-block__image img');

let options = {
  root: document.querySelector(".main-video-block__container"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(handleImageLoading, options);

observer.observe(mainImage);

function handleImageLoading (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('IMAGE LOADED');
    }
  })
  console.log(entries);
  console.log(observer);
}
