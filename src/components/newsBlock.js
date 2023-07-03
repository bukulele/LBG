import singleNewsBlock from './singleNewsBlock.html';
import pagerContainer from './pagerContainer.html';

document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);
document.querySelector('.news-block__container .news-block__list').insertAdjacentHTML('beforeend', singleNewsBlock);

document.querySelector('.news-block__button-container').innerHTML = pagerContainer;
