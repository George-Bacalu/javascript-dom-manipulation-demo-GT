function calculateAge(event) {
  event.preventDefault();

  const currentDate = new Date();
  const birthDate = new Date(document.getElementById("birth-date").value);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  let years = currentYear - birthYear;
  if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
    years--;
  }
  let message = document.querySelector("#message");
  message.textContent = `Varsta ta: ${years} ani!`;
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => calculateAge(event));
