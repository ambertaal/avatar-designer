import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="title">Avatar designer (Beginner)</h1>
    <p class="subtitle">Upload your image or try one of the provided options:</p>
    <div class="hide">
      <img src="./example/cat1.png" alt="cat1" id="image" class="image" width="150" height="150">
    </div>
    <div class="image-button">
      <button id="image1" class="button" type="button" data-image-path="example/cat1.png">Image 1</button>
      <button id="image2" class="button"type="button" data-image-path="example/cat2.jpg">Image 2</button>
      <button id="image3" class="button" type="button" data-image-path="example/cat3.png">Image 3</button>
    </div>
    <div class="slidecontainer">
      <label for="myRange">Adjust border radius:</label>
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>
    <div class="color-picker-input">
      <label for="favcolor">Select your favorite color:</label>
      <input type="color" id="favcolor" name="favcolor" value="#ff851a">
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

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
