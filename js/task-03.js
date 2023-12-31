const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const itemEl = document.querySelector(".gallery");

const imagesArray = images.map((image) => {
  const newLi = document.createElement("li");

  const newImg = document.createElement("img");
  newImg.src = `${image.url}`;
  newImg.alt = `${image.alt}`;
  newImg.width = 360;

  newLi.appendChild(newImg);
  return newLi;
});

itemEl.append(...imagesArray);

// const itemEl = document.querySelector(".gallery");
// const imagesArray = images.map((image) => {
//   const newLi = `<li><img src = "${image.url}" alt = "${image.alt}" width = "360" ></li>`;
//   return newLi;
// });

// itemEl.insertAdjacentHTML("afterbegin", imagesArray.join(""));

// const itemEl = document.querySelector(".gallery");
// let liEl = "";
// for (let i = 0; i < images.length; i += 1) {
//   const image = images[i];
//   liEl += `<li><img src = "${image.url}" alt = "${image.alt}" width = "500" ></li>`;
// }

// itemEl.insertAdjacentHTML("afterbegin", liEl);

// for (let i = 0; i < images.length; i += 1) {
//   const image = images[i];

//   const liEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 500;
//   liEl.appendChild(imgEl);

//   const itemEl = document.querySelector(".gallery");
//   itemEl.appendChild(liEl);
// }
