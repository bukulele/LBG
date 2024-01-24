let subscribeWindowShowed = getCookie("subscribeWindowShowed");
let subscribeWindowWrapper = document.querySelector('.subscribe-window__wrapper');
let subscribeWindowContainer = document.querySelector('.subscribe-window__container');
let closeSubscribeWindowButton = document.querySelector('.subscribe-window__close');

function showSubscribeWindow() {
  if (window.scrollY > 100
    && !subscribeWindowWrapper.className.includes('subscribe-window_visible')
    && !subscribeWindowContainer.className.includes('subscribe-window_visible')
  ) {
    subscribeWindowWrapper.style.display = 'block';
    subscribeWindowContainer.style.display = 'flex';
    setTimeout(() => {
      subscribeWindowWrapper.classList.add('subscribe-window_visible');
      subscribeWindowContainer.classList.add('subscribe-window_visible');
    }, 0);
  }
}

function hideSubscribeWindow() {
  setCookie('subscribeWindowShowed', true, {expires: 1});
  if (subscribeWindowWrapper.className.includes('subscribe-window_visible')
    && subscribeWindowContainer.className.includes('subscribe-window_visible')
  ) {
    subscribeWindowWrapper.classList.remove('subscribe-window_visible');
    subscribeWindowContainer.classList.remove('subscribe-window_visible');
    setTimeout(() => {
      subscribeWindowWrapper.style.display = 'none';
      subscribeWindowContainer.style.display = 'none';
    }, 200);
    document.removeEventListener("scroll", showSubscribeWindow);
  }
}

function setCookie(name, value, options = {}) {
  const expirationDate = new Date();
  expirationDate.setMinutes(expirationDate.getMinutes() + options.expires);
  options.expires = expirationDate.toUTCString();

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (!subscribeWindowShowed) document.addEventListener("scroll", showSubscribeWindow);
closeSubscribeWindowButton.addEventListener('click', hideSubscribeWindow);
