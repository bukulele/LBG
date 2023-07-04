import singleNewsBlock from './singleNewsBlock.html';
import pagerContainer from './pagerContainer.html';

document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);

document.querySelector('.news-block__button-container').innerHTML = pagerContainer;

let textContainers = document.querySelectorAll('.single-news-block__text-container');

for (let textContainer of textContainers) {
  textContainer.insertAdjacentHTML('beforeend', '<div class="single-news-block__shadow"></div>');
}
let blockButtons = document.querySelectorAll('.single-news-block__buttons');
for (let block of blockButtons) {
  block.insertAdjacentHTML('beforebegin', '<a href="" class="single-news-block__read-more news-block--visible">Read more</a><a href="" class="btn btn--classic btn--red btn--full-xs">VIEW COMMENTS (3) OR COMMENT</a>');
}
