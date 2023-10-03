import "./style.css";

const myRange = document.getElementById("myRange");
const image = document.querySelector(".image");
const square = document.getElementById("square");

myRange.addEventListener("change", (event) => {
  image.style.borderRadius = `${parseInt(event.target.value, 10)}px`;
});

const favColor = document.getElementById("favcolor");

favColor.addEventListener("change", (event) => {
  image.style.borderColor = event.target.value;
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    image.src = event.target.dataset.imagePath;
    image.parentElement.className = "show";
  });
});
