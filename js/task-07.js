const fontSizeControl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

fontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textEl.style.fontSize = fontSizeControl.value + "px";
}
