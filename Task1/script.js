function confirmName(event) {
  event.preventDefault();
  const nume = document.getElementById("name").value;
  document.forms[0].reset(); // clear the form for the next entries
  let messajNume = document.querySelector("#message");
  messajNume.textContent = `Salut ${nume}!`;
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => confirmName(event));
