document.querySelector("p").remove();

let oldDiv = document.querySelector(".our-element");

let startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.setAttribute("title", "Start Element");
startDiv.setAttribute("data-value", "Start");
startDiv.innerHTML = "Start";
oldDiv.insertAdjacentElement("beforebegin", startDiv);

let endDiv = document.createElement("div");
endDiv.className = "End";
endDiv.setAttribute("title", "End Element");
endDiv.setAttribute("data-value", "End");
endDiv.innerHTML = "End";
oldDiv.insertAdjacentElement("afterend", endDiv);
