import benefitsBanner from './benefitsBanner.html';

let targetContainer = document.querySelector('.auth-block__group .auth-block__half:last-of-type');

targetContainer.innerHTML = benefitsBanner;

let benefitsBannerHeader = targetContainer.querySelector('.benefits-banner__header');
benefitsBannerHeader.innerHTML = 'Buy access to get:';
