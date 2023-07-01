const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);

let counterValue = 0;

newValue();

function decrementValue() {
  counterValue -= 1;
  newValue();
}
function incrementValue() {
  counterValue += 1;
  newValue();
}

function newValue() {
  valueEl.textContent = counterValue;
}

// function decrementValue() {
//   valueEl.textContent = Number(valueEl.textContent) - 1;
// }
// function incrementValue() {
//   valueEl.textContent = Number(valueEl.textContent) + 1;
// }
