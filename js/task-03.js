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

const itemEl = document.querySelector(".gallery");
let liEl = "";
for (let i = 0; i < images.length; i += 1) {
  const image = images[i];
  liEl += `<li><img src = "${image.url}" alt = "${image.alt}" width = "500" ></li>`;
}

itemEl.insertAdjacentHTML("afterbegin", liEl);
