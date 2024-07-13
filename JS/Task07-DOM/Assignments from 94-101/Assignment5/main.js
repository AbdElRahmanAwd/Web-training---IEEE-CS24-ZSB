let elements = document.body;

elements.addEventListener("click", function (event) {
  console.log(event.target.tagName);
});
