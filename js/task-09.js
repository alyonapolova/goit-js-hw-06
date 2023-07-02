// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnChangeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor(event) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
