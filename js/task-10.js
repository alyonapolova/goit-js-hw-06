// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

//btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

btnCreate.addEventListener("click", function () {
  const amount = parseInt(inputNumber.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  let boxArray = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;
    boxArray.push(box);
  }

  divBoxes.append(...boxArray);
}

// function createBoxes() {
//   const amount = parseInt(inputNumber.value);
//   let boxArray = [];
//   let width = 30;
//   let height = 30;

//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = `${width}px`;
//     box.style.height = `${height}px`;
//     box.style.backgroundColor = getRandomHexColor();

//     width += 10;
//     height += 10;
//     boxArray.push(box);
//   }

//   divBoxes.append(...boxArray);
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes(event) {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}
