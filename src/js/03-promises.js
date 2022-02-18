import Notiflix from 'notiflix';

const submitBtn = document.querySelector('button');
const delayInp = document.querySelector('input[name="delay"]');
const stepInp = document.querySelector('input[name="step"]');
const amountInp = document.querySelector('input[name="amount"]');

let i = 1;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
};

function successNote( {position, delay} ) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function failureNote({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
};

submitBtn.addEventListener("click", (event) => {
  const date = new Date();
  event.preventDefault();
  const timeoutId = setTimeout(() => {
    const newDate = new Date();
    const diff = newDate - date;
    createPromise(i, diff).then(successNote).catch(failureNote);

    const intervalId = setInterval(() => {
      i += 1;
      const intDate = new Date();
      const intDiff = intDate - date;
      if (i > amountInp.value) {
        clearInterval(intervalId);
        i = 1;
        return;
      };
      // const newDelay = Number(delayInp.value) + Number(stepInp.value * (i - 1));
      createPromise(i, intDiff).then(successNote).catch(failureNote);
    }, stepInp.value);
  }, delayInp.value);
});



