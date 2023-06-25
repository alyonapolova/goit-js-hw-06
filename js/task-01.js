const allOfCategoriesEl = document.querySelector("#categories");
const numCategoriesEl = allOfCategoriesEl.children.length;
console.log("Number of categories:", numCategoriesEl);

const itemsEl = document.querySelectorAll(".item");
// console.log(itemsEl);
itemsEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;
  console.log("Category:", titleEl);
  const numbEl = item.querySelectorAll("li").length;
  console.log("Elements:", numbEl);
});

// const animalsEl = document.querySelector(".item");
// const animalsTitleEl = animalsEl.childNodes[1].textContent;

// console.log("Category:", animalsTitleEl);

// const productsEl = animalsEl.nextElementSibling;
// const productsTitleEl = productsEl.childNodes[1].textContent;

// console.log("Category:", productsTitleEl);

// const technologiesEl = document.querySelector(".item");
// const technologiesTitleEl = technologiesEl.childNodes[1].textContent;
// console.log("Category:", technologiesTitleEl);
