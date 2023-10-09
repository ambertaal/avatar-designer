const myRange = document.getElementById("myRange");
const mySize = document.getElementById("size");
const image = document.querySelector(".image");
const square = document.getElementById("square");
const imageContainer = document.getElementById("image-container");

mySize.addEventListener("input", (event) => {
  imageContainer.style.height = `${parseInt(event.target.value, 10)}px`;
});

myRange.addEventListener("input", (event) => {
  imageContainer.style.borderRadius = `${parseInt(event.target.value, 10)}%`;
});

const favColor = document.getElementById("favcolor");

favColor.addEventListener("input", (event) => {
  imageContainer.style.borderColor = event.target.value;
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    image.src = event.target.dataset.imagePath;
  });
});
