const btn = document.querySelector("button");
const mainContainer = document.querySelector(".mainContainer");
const span = document.querySelector("span");

function getColorValue(val) {
  return Math.floor(Math.random() * val);
}

function colorChanger() {
  const red = getColorValue(256);
  const green = getColorValue(256);
  const blue = getColorValue(256);
  const finalColor = `rgb(${red}, ${green}, ${blue})`;

  mainContainer.style.background = finalColor;
  btn.style.background = finalColor;
  span.textContent = finalColor;
}

btn.addEventListener("click", colorChanger);
