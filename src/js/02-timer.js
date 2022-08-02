import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// console.log('nowDate = ', options.defaultDate);
// const deadline = new Date('2022-08-01 20:00');
// console.log('deadline = ', deadline);
// console.log('delta = ', deadline - options.defaultDate);

const refs = {
  inputRef: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let dateNow = new Date().getTime();
console.log('dateNow', dateNow);
let chosenDate = null;
refs.startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0].getTime();
    console.log('chosenDate', chosenDate);

    if (selectedDates[0] < dateNow) {
      return Notify.failure('Please choose a date in the future');
    }

    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.addEventListener('click', onCountTime);
  },
};

flatpickr(refs.inputRef, options);

function onCountTime() {
  setInterval(() => {
    const timerValue = chosenDate - dateNow;
    console.log('chosenDate', chosenDate);
    console.log('chosenDate', chosenDate.getTime());
    convertMs(timerValue);
  }, 1000);
}

// function addLeadingZero(value) {
//   console.log('value', value);
//   // convertMs(timerValue)
//   // padStart();
// }

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
