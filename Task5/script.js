const currentTimeFull = new Date().toLocaleTimeString();
const currentTime = currentTimeFull.slice(0, currentTimeFull.length - 2);
const renderedTime = document.querySelector(".container:first-child h1");
renderedTime.textContent = currentTime;

function updateTime() {
  const updatedTimeFull = new Date().toLocaleTimeString();
  const updatedTime = updatedTimeFull.slice(0, updatedTimeFull.length - 2);
  renderedTime.textContent = updatedTime;
}

setInterval(updateTime, 1000);

function submitHandler(event) {
  event.preventDefault();
  const prenume = document.querySelector("#firstName").value;
  const numeleFamilie = document.querySelector("#lastName").value;
  const currentDate = new Date();
  const birthDate = new Date(document.getElementById("birth-date").value);
  document.forms[0].reset();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;
  if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
    years--;
    months = 12 - (birthMonth - currentMonth);
  }
  if (birthDay > currentDay) {
    days = daysInMonth(birthMonth, birthYear) - (birthDay - currentDay);
  }

  let mesajNume = document.querySelector("#message1");
  mesajNume.textContent = `Salut ${prenume} ${numeleFamilie}!`;
  let mesajVarsta = document.querySelector("#message2");
  mesajVarsta.textContent = `Varsta ta: ${years} ani, ${months} luni si ${days} zile!`;
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => submitHandler(event));

/*
let firstNameInput = document.querySelector("#firstName");
let lastNameInput = document.querySelector("#lastName");
firstNameInput.addEventListener("keypress", (event) => displayFirstName(event));
lastNameInput.addEventListener("keypress", (event) => displayLastName(event));

function displayFirstName(event) {
  console.log(this);
  let mesajNume = document.querySelector("#message1");
  mesajNume.textContent += event.key;
}

function displayLastName(event) {
  console.log(this);
  let mesajNume = document.querySelector("#message1");
  mesajNume.textContent += event.key;
}
*/
