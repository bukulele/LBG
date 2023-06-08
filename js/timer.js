let targetDate = new Date(2024, 0, 1, 0, 0, 0);

function defineLeftTime() {
  let timeLeft = (Number(targetDate) - Date.now());
  let daysLeft = timeLeft / 1000 / 60 / 60 / 24;
  let daysDecimal = daysLeft.toString().split('.')[1];
  let hoursLeft = Number('0.' + daysDecimal) * 24;
  let hoursDecimal = hoursLeft.toString().split('.')[1];
  let minutesLeft = Number('0.' + hoursDecimal) * 60;
  let minutesDecimal = minutesLeft.toString().split('.')[1];
  let secondsLeft = Number('0.' + minutesDecimal) * 60;

  let daysElem = document.querySelector('.timer-block__timer .timer__days .timer__figures');
  let hoursElem = document.querySelector('.timer-block__timer .timer__hours .timer__figures');
  let minutesElem = document.querySelector('.timer-block__timer .timer__minutes .timer__figures');
  let secondsElem = document.querySelector('.timer-block__timer .timer__seconds .timer__figures');

  daysElem.innerHTML = String(Math.floor(daysLeft));
  hoursElem.innerHTML = String(Math.floor(hoursLeft));
  minutesElem.innerHTML = String(Math.floor(minutesLeft));
  secondsElem.innerHTML = String(Math.floor(secondsLeft));

  setTimeout(defineLeftTime, 1000);
}

defineLeftTime();
