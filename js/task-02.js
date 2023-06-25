const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i += 1) {
  const newLiEl = document.createElement("li");
  newLiEl.classList.add("item");
  newLiEl.textContent = ingredients[i];
  const navEl = document.querySelector("#ingredients");
  navEl.appendChild(newLiEl);
}
