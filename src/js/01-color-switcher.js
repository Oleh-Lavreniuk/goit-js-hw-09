function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener('click', onStartChangeColor);
stoptBtn.addEventListener('click', onStopChangeColor);

let intervalId = null;
let isActive = false;

function onStartChangeColor() {
  if (isActive) {
    return;
  }

  isActive = true;

  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    console.log('Color is change', intervalId);
  }, 1000);
}

function onStopChangeColor() {
  clearInterval(intervalId);
  console.log('Stop change color', intervalId);
  isActive = false;
}
