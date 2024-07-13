let elements = document.images;

for (var i = 0; i < elements.length; i++) {
  elements[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  elements[i].alt = "Elzero logo";
}

console.log(elements);
