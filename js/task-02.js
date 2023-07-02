const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");
const ingredientLiEl = ingredients.map((ingredient) => {
  const liEl = `<li class = "item"> ${ingredient} </li>`;
  return liEl;
});

navEl.insertAdjacentHTML("afterbegin", ingredientLiEl.join(""));

// for (let i = 0; i < ingredients.length; i += 1) {
//   const newLiEl = document.createElement("li");
//   newLiEl.classList.add("item");
//   newLiEl.textContent = ingredients[i];
//   const navEl = document.querySelector("#ingredients");
//   navEl.appendChild(newLiEl);
// }

// const ingredientLiEl = ingredients.map((ingredient) => {
//   return `<li class = "item"> ${ingredient} </li>`;
// });

// const navEl = document.querySelector("#ingredients");
// navEl.insertAdjacentHTML("afterbegin", ingredientLiEl);
