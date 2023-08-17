import benefitsBanner from './benefitsBanner.html';

let targetContainer = document.querySelector('.write-us-block__group .write-us-block__half:last-of-type');

targetContainer.innerHTML = benefitsBanner;

let benefitsBannerHeader = targetContainer.querySelector('.benefits-banner__header');
benefitsBannerHeader.innerHTML = 'Member benefits:';
