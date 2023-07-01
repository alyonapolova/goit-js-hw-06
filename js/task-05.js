const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", printName);

function getOutput(event) {
  if (event.currentTarget.value === "") {
    return "Anonymous";
  }

  return event.currentTarget.value;
}

function printName(event) {
  const textContent = getOutput(event);
  spanName.textContent = textContent;
}

// function printName(event) {
//   let emptyInput = "Anonymous";
//   if (event.currentTarget.value !== "") {
//     spanName.textContent = event.currentTarget.value;
//     return;
//   }

//   spanName.textContent = emptyInput;
// }

// function printName(event) {
//   if (event.currentTarget.value !== "") {
//     spanName.textContent = event.currentTarget.value;
//   } else {
//     spanName.textContent = "Anonymous";
//   }
// }
