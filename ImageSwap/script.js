const imgOne = document.querySelector("#imgOne");
const imgTwo = document.querySelector("#imgTwo");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let srcOne = imgOne.src;
  let srcTwo = imgTwo.src;

  imgOne.src = srcTwo;
  imgTwo.src = srcOne;
});
