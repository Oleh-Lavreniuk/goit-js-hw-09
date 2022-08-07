import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputRef: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),

  timerDiv: document.querySelector('.timer'),
  dataCont: document.querySelectorAll('.field'),
  dataContValue: document.querySelectorAll('.value'),
  dataContLabel: document.querySelectorAll('.label'),
};

//* Start styles CSS
refs.timerDiv.setAttribute(
  'style',
  'display: flex; flex-direction: row; margin-top: 14px;'
);

refs.dataCont.forEach(function (el) {
  el.setAttribute('style', 'margin-right: 14px; text-align: center;');
});

refs.dataContValue.forEach(function (el) {
  el.setAttribute(
    'style',
    'display: block; font-size: 36px; margin-bottom: -10px;'
  );
});

refs.dataContLabel.forEach(function (el) {
  el.setAttribute('style', 'text-transform: uppercase; font-size: 12px;');
});
//! End styles CSS

let chosenDate = null;
refs.startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      return Notify.failure('Please choose a date in the future');
    }

    chosenDate = selectedDates[0];
    console.log('chosenDate:', chosenDate);

    refs.startBtn.removeAttribute('disabled');
  },
};

flatpickr(refs.inputRef, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerValues({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

refs.startBtn.addEventListener('click', onCountTime);

function onCountTime() {
  let timerId = setInterval(() => {
    let timerValue = chosenDate - new Date();

    if (timerValue <= 0) {
      clearInterval(timerId);
      timerValue = 0;

      const addMarkup = `<p class="message" 
        style="color: red; font-size: 24px">You late, time is up!!!</p>`;
      refs.timerDiv.insertAdjacentHTML('afterend', addMarkup);
    }

    const resObj = convertMs(timerValue);
    updateTimerValues(resObj);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
