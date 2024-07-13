let input = document.querySelector(".input");
let addTask = document.querySelector(".add");
let parent = document.querySelector(".tasks");
// localStorage.clear();
let tasks = localStorage.getItem("div-list");
if (tasks) {
  parent.innerHTML = tasks;
}

let inputText = sessionStorage.getItem("input-text");

if (inputText) {
  input.value = inputText;
}

input.onblur = function () {
  sessionStorage.setItem("input-text", this.value);
};

addTask.addEventListener("click", function (event) {
  event.preventDefault();
  add(input.value);
});

function add(value) {
  if (value === "") {
    return console.log("empty");
  }
  let subParent = document.createElement("div");
  subParent.className = "grid";
  parent.appendChild(subParent);
  let span = document.createElement("span");
  span.textContent = value;
  let del = document.createElement("button");
  del.className = "add";
  del.textContent = "Delete";
  subParent.appendChild(span);
  subParent.appendChild(del);
  localStorage.setItem("div-list", parent.innerHTML);
}

if (document.querySelector("button")) {
  let arr = document.querySelectorAll("button");

  for (let button of arr) {
    button.addEventListener("click", function (event) {
      event.target.parentElement.remove();
      localStorage.setItem("div-list", parent.innerHTML);
    });
  }
}
