let number = document.querySelector("[name = elements]");
let text = document.querySelector("[name = texts]");
let select = document.querySelector("[name = type]");
let create = document.querySelector("[name = create]");

create.addEventListener("click", function (event) {
  event.preventDefault();
  creation(number.value, select.value.toLowerCase(), text.value);
});

function creation(conut, element, text) {
  let div = document.querySelector(".results");
  div.innerHTML = "";
  for (let i = 0; i < conut; i++) {
    let newElement = document.createElement(element);
    newElement.textContent = text;
    newElement.classList.add("box");
    newElement.setAttribute("title", "Element");
    newElement.setAttribute("id", "id-" + i);
    div.appendChild(newElement);
  }
}
