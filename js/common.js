document.addEventListener('mouseover', (e) => {
  if (e.target.dataset.icon) {
    console.log(e.target.dataset.icon);
  }
});
