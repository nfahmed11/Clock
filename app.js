let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
let digitalClock = document.querySelector(".digital-clock");

setInterval(function () {
  let today = new Date();
  let seconds = today.getSeconds();
  let minutes = today.getMinutes();
  let hours = today.getHours();
  let second = (seconds / 60) * 360 + 90;
  let minute = (minutes / 60) * 360 + 90;
  let hour = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${second}deg)`;
  minHand.style.transform = `rotate(${minute}deg)`;
  hourHand.style.transform = `rotate(${hour}deg)`;

  digitalClock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
