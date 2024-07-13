let ele = document.querySelectorAll("div");

let x = ele[0].innerHTML;
let y = ele[1].innerHTML;

let x1 = ele[0].getAttribute("title");
let y1 = ele[1].getAttribute("title");

ele[0].innerHTML = y;
ele[1].innerHTML = x + " 2";

ele[0].setAttribute("title", y1);
ele[1].setAttribute("title", x1);
