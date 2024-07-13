let div = document.createElement("div");
div.textContent = 10;
document.body.appendChild(div);

let counter = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML == 5) {
    window.open(
      "https://elzero.org/",
      "_blank",
      "width : 300 , hight:400 ; top : 50 , left : 50 "
    );
  }
  if (div.innerHTML <= 0) {
    clearInterval(counter);
  }
}, 1000);
