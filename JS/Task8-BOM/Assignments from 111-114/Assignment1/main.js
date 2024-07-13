let parent = document.querySelector(".selection");
let testDiv = document.querySelector(".test");
var fonts = ["Open Sans", "Cairo", "Roboto"];
var colors = ["red", "green", "blue", "yellow", "purple", "brown"];
var fontSize = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// localStorage.clear();

// create button back to default

let container = document.querySelector(".container");
let btn = document.createElement("button");
btn.textContent = "Default";
container.appendChild(btn);
btn.style.color = "white";
btn.addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});
// ----------------------------------------------------------------

// create fonts selection
let fontSelect = document.createElement("select");
fontSelect.id = "fontSs";
parent.appendChild(fontSelect);
for (var i = 0; i < fonts.length; i++) {
  let option = document.createElement("option");
  option.value = fonts[i];
  option.text = fonts[i];
  fontSelect.appendChild(option);
}
fontSelect.addEventListener("change", function () {
  testDiv.style.fontFamily = this.value;
  fontSelect.value = this.value;
  localStorage.setItem("font-weight", this.value);
});
// ----------------------------------------------------------------

// create color selection
let colorSelect = document.createElement("select");
colorSelect.id = "colors";
parent.appendChild(colorSelect);
for (var i = 0; i < colors.length; i++) {
  let option = document.createElement("option");
  option.value = colors[i];
  option.text = colors[i];
  colorSelect.appendChild(option);
}
colorSelect.addEventListener("change", function () {
  testDiv.style.color = this.value;
  colorSelect.value = this.value;
  btn.style.backgroundColor = this.value;
  localStorage.setItem("font-color", this.value);
});
// ----------------------------------------------------------------

// create font size selection
let fontSizeSelect = document.createElement("select");
fontSizeSelect.id = "fontSize";
parent.appendChild(fontSizeSelect);
for (var i = 0; i < fontSize.length; i++) {
  let option = document.createElement("option");
  option.value = fontSize[i];
  option.text = fontSize[i] + "px";
  fontSizeSelect.appendChild(option);
}
fontSizeSelect.addEventListener("change", function () {
  testDiv.style.fontSize = this.value + "px";
  fontSizeSelect.value = this.value;
  localStorage.setItem("font-size", this.value);
});
// ----------------------------------------------------------------

let fontValue = localStorage.getItem("font-weight");
let colorValue = localStorage.getItem("font-color");
let fontSizeValue = localStorage.getItem("font-size");

if (fontValue) {
  testDiv.style.fontFamily = fontValue;
  fontSelect.value = fontValue;
} else testDiv.style.fontFamily = fontSelect.value;

if (colorValue) {
  testDiv.style.color = colorValue;
  colorSelect.value = colorValue;
  btn.style.backgroundColor = colorValue;
} else {
  testDiv.style.color = colorSelect.value;
  btn.style.backgroundColor = colorSelect.value;
}

if (fontSizeValue) {
  testDiv.style.fontSize = fontSizeValue + "px";
  fontSizeSelect.value = fontSizeValue;
} else testDiv.style.fontSize = fontSizeSelect.value + "px";

// ----------------------------------------------------------------
