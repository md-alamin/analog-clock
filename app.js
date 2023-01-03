const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function update() {
  const currentDate = new Date();
  setTimeout(update, 1000);
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();
  const hourDeg = (hours / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minutes / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (seconds / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

update();
