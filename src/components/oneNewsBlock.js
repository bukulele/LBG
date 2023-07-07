import image34 from '../../assets/temp/image 34.png';
import image35 from '../../assets/temp/image 35.png';
import image36 from '../../assets/temp/image 36.png';
import image37 from '../../assets/temp/image 37.png';
import image38 from '../../assets/temp/image 38.png';
import singleNewsBlock from './singleNewsBlock.html';

let images = [image34, image35, image36, image37, image38];
document.querySelector('.news-block__container .news-block__news-container').innerHTML = singleNewsBlock;

let singleBlockButtons = document.querySelector('.single-news-block__buttons');
singleBlockButtons.innerHTML = `
            <a href="" class="btn btn--link">
                <div class="control-panel__icon-container">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6_7084)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.923 8.25776C17.7134 8.25776 16.6401 7.69461 15.9053 6.82262L8.85285 11.0141C9.00043 11.4451 9.0967 11.9026 9.0967 12.3865C9.0967 12.8357 9.00845 13.2618 8.88011 13.668L15.9278 17.8562C16.6626 17.0007 17.7246 16.4491 18.923 16.4491C21.1386 16.4491 22.9338 18.2971 22.9338 20.5778C22.9338 22.8585 21.1386 24.7065 18.923 24.7065C16.7075 24.7065 14.9123 22.8585 14.9123 20.5778C14.9123 20.1253 15.0005 19.6976 15.1305 19.2913L8.08438 15.1032C7.34961 15.962 6.28595 16.5152 5.08595 16.5152C2.87041 16.5152 1.0752 14.6672 1.0752 12.3865C1.0752 10.1058 2.87041 8.25776 5.08595 8.25776C6.25387 8.25776 7.29346 8.77798 8.02662 9.59877L15.1208 5.38253C14.9973 4.98616 14.9123 4.57 14.9123 4.12905C14.9123 1.84835 16.7075 0.000337601 18.923 0.000337601C21.1386 0.000337601 22.9338 1.84835 22.9338 4.12905C22.9338 6.40975 21.1386 8.25776 18.923 8.25776Z" fill="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_7084">
                                <rect width="24" height="24.7059" fill="currentColor" transform="matrix(1 0 0 -1 0 24.7061)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p>SHARE</p>
            </a>
`;

singleBlockButtons.insertAdjacentHTML('beforebegin', `
<div class="single-news-block__photos"></div>
    <div class="single-news-block__text-container">
        <p class="single-news-block__text">And now the hottest thing is casting:</p>
    </div>
<div class="single-news-block__video"></div>
`);

for (let image of images) {
  let imageElement = document.createElement('img');
  imageElement.src = image;
  document.querySelector('.single-news-block__photos').insertAdjacentElement('beforeend', imageElement);
}

document.querySelector('.single-news-block__video').innerHTML = `
    <div class="watch-video-block__video-container">
        <img src="../../assets/temp/image%2020.png" alt="">
        <div class="video-container__block-over">
            <div class="video-container__controls">
                <div class="controls__play-container">
                    <div class="play-container__icon-container">
                        <svg viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.54915 24.0705C3.2375 24.2622 2.88034 24.3673 2.51451 24.375C2.14868 24.3827 1.78742 24.2927 1.46797 24.1143C1.14852 23.9358 0.882452 23.6754 0.697197 23.3598C0.511941 23.0443 0.414203 22.685 0.414062 22.3191V2.2524C0.414203 1.88649 0.511941 1.52723 0.697197 1.21169C0.882452 0.896136 1.14852 0.635711 1.46797 0.457262C1.78742 0.278813 2.14868 0.188799 2.51451 0.196502C2.88034 0.204204 3.2375 0.309344 3.54915 0.501082L19.8527 10.5345C20.1519 10.7186 20.399 10.9763 20.5704 11.283C20.7417 11.5896 20.8317 11.9351 20.8317 12.2865C20.8317 12.6378 20.7417 12.9833 20.5704 13.2899C20.399 13.5966 20.1519 13.8543 19.8527 14.0385L3.54915 24.0705Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
