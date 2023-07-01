const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", printName);

function printName(event) {
  if (event.currentTarget.value >= 1) {
    spanName.textContent = event.currentTarget.value;
  } else return spanName;
}
