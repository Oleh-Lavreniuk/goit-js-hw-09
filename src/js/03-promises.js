import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayInp: document.querySelector('[name="delay"]'),
  stepInp: document.querySelector('[name="step"]'),
  amountInp: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

// console.log('refs', refs.delay);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
