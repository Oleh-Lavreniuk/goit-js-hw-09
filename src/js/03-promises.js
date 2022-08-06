import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnRef = document.querySelector('[type="submit"]');
const formRef = document.querySelector('.form');
formRef.addEventListener('submit', handleSubmitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmitForm(ev) {
  ev.preventDefault();
  btnRef.disabled = true;

  const step = +ev.currentTarget.elements.step.value;
  const amount = +ev.currentTarget.elements.amount.value;
  let delay = +ev.currentTarget.elements.delay.value;
  // console.log(ev.currentTarget.elements);

  setTimeout(() => {
    btnRef.disabled = false;
  }, amount * step + delay);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise  ${position} in ${delay}ms`);
      });

    delay += step;
  }
}
