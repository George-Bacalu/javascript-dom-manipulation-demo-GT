const currentTimeFull = new Date().toLocaleTimeString();
const currentTime = currentTimeFull.slice(0, currentTimeFull.length - 2);
const renderedTime = document.querySelector("h1");
renderedTime.textContent = currentTime;

function updateTime() {
  const updatedTimeFull = new Date().toLocaleTimeString();
  const updatedTime = updatedTimeFull.slice(0, updatedTimeFull.length - 2);
  renderedTime.textContent = updatedTime;
}

setInterval(updateTime, 1000);
