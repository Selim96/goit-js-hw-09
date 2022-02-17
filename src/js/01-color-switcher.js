const body = document.querySelector("body");
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

btnStart.addEventListener("click", () => {
    timer = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
});

btnStop.addEventListener("click", () => {
    clearInterval(timer);
    btnStart.disabled = false;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}