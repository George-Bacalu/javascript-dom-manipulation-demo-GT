function submitHandler(event) {
  event.preventDefault();
  
  const nume = document.querySelector("#fullName").value;
  const ocupatie = document.querySelector("#role").value;
  const impresie = document.querySelector("#user-recommend:checked").value;
  const comentariu = document.querySelector("#comments").value;
  
  const preferinte = [];
  const colectiePreferinte = document.querySelectorAll("#prefer:checked");
  colectiePreferinte.forEach((preferinta) => preferinte.push(preferinta.defaultValue));
  
  document.forms[0].reset();
  let message = document.querySelector("#message");
  message.append(`Salut ${nume}!\n`);
  message.append(`In prezent ocupatia ta este: ${ocupatie}!\n`);
  message.append(`Apreciem sa stim ca programul Generatia Tech ti se pare ${impresie}!\n`);
  message.append(`Pe baza feedback-ului tau vom veni pregatiti cat de curand cu materiale care sa vizeze\n`);
  message.append(`${preferinte.join(", ")}!\n`);
  message.append(`Multumim pentru comentariul lasat!\n`);
  message.append(`${comentariu.trim().slice(0, 100) + "..."}`);
  messsage.style.width = "100%";
  message.style.wordWrap = "break-word";
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => submitHandler(event));
