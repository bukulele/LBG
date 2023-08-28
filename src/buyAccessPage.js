import navbar from './components/navbar.html';
import footer from './components/footer.html';
import buyAccessBlock from './components/buyAccessBlock.html';
import banner5 from './components/banner5.html';
import benefitsBanner from './components/benefitsBanner.html';
import paymentOptionsBanner from './components/paymentOptionsBanner.html';
import memberButtonSide from './components/memberButtonSide.html';
import memberButton from './components/memberButton.html';
import loginJoinButtons from './components/logInJoinButtons.html';

document.getElementById('navbar').innerHTML = navbar;
document.getElementById('footer').innerHTML = footer;
document.getElementById('buyAccessBlock').innerHTML = buyAccessBlock;
document.getElementById('banner_5').innerHTML = banner5;
document.getElementById('paymentOptions').innerHTML = paymentOptionsBanner;

document.querySelector('#banner_5 .buy-access-banner__half:nth-of-type(2)').innerHTML = benefitsBanner;

if (sessionStorage.getItem('auth') === 'true') {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = memberButtonSide;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = memberButton;
} else {
  document.querySelector('#navbar .links-container__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons').innerHTML = loginJoinButtons;
  document.querySelector('#navbar .navbar__user-buttons .join-now-button').classList.add('btn--mobile-small');
}
