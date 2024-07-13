let parent = document.createElement("div");
let head = document.createElement("h3");
let text = document.createElement("p");
let span = document.createElement("span");

parent.className = "popup";
head.textContent = "Welcome";
text.textContent = "Welcome To Elzero Web School";

document.body.appendChild(parent);
parent.appendChild(head);
parent.appendChild(text);
parent.appendChild(span);

setTimeout(function () {
  parent.style.visibility = "visible";
}, 5000);

span.addEventListener("click", function () {
  parent.style.visibility = "hidden";
});
