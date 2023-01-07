let min = 00;
let sec = 00;
let tens = 00;

const appendTens = document.getElementById("tens");
const appendSec = document.getElementById("sec");
const appendMin = document.getElementById("min");

const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");

let a;

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    sec++;
    appendSec.innerHTML = "0" + sec;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    appendSec.innerHTML = sec;
  }
  if (sec > 60) {
    tens++;
    min++;
    sec++;

    appendMin.innerHTML = "0" + min;
    sec = 0;
    appendSec.innerHTML = "0" + sec;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }
}

buttonStart.onclick = function () {
  a = setInterval(startTimer);
};

buttonStop.onclick = function () {
  clearInterval(a);
};

buttonReset.onclick = function () {
  clearInterval(a);
  tens = "00";
  sec = "00";
  min = "00";
  appendTens.innerHTML = tens;
  appendSec.innerHTML = sec;
  appendMin.innerHTML = min;
};
