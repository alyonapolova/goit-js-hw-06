const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", checkForm);
// validationInput.addEventListener("focus", removeValidationClasses);
const dataLength = Number(validationInput.getAttribute("data-length"));

function checkForm(event) {
  if (validationInput.value.length === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
    // console.log("ok");
  } else {
    // console.log("not ok");
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

// function removeValidationClasses() {
//   validationInput.classList.remove("valid");
//   validationInput.classList.remove("invalid");
// }
