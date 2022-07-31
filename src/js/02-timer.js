import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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

let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    // Этот if↓ должен срабатывать после onClose
    if (selectedDates[0] < options.defaultDate) {
      return alert('Please choose a date in the future');
    }
  },
};

let nowDate = options.defaultDate;

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

/**
1) Добавь минимальное оформление элементов интерфейса.

2) 
*/
