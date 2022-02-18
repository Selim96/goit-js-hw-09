import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const date = new Date();
        const newdate = new Date(selectedDates[0]);
    
        if (newdate.getTime() > date.getTime()) {
            startBtn.disabled = false;
        } else {
            window.alert("Please choose a date in the future");
        };
    },
};

const fp = flatpickr(input, options);

// input.addEventListener("input", () => {
    
// });

startBtn.addEventListener("click", () => {    
    const dateInput = new Date(input.value);
    
    startBtn.disabled = true;
    input.disabled = true;
    
    timer = setInterval(() => {
        const date = new Date();
        const distinction = dateInput.getTime() - date.getTime();
        
        const counter = convertMs(distinction);
        
        days.textContent = counter.days;
        hours.textContent = counter.hours;
        minutes.textContent = counter.minutes;
        seconds.textContent = counter.seconds;
    }, 1000);
    
});

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
};




