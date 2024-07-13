let current = document.getElementsByClassName("element current")[0];
let add = document.querySelector("input[placeholder = 'Add Classes']");
let remove = document.querySelector("input[placeholder = 'Remove Classes']");

function addClass() {
  let className = add.value.toLowerCase().split(" ");
  className.forEach((e) => {
    if (e) current.classList.add(e);
  });
  list();
}

function removeClass() {
  let classNames = remove.value.toLowerCase().split(" ");
  classNames.forEach((e) => {
    if (e) current.classList.remove(e);
  });
  list();
}

add.addEventListener("blur", addClass);
remove.addEventListener("blur", removeClass);

function list() {
  let classCount = current.classList.value.split(" ");
  classCount.sort();
  let list = document.querySelector(".classes-list div");
  list.innerHTML = "";
  if (classCount[0] === "") {
    let span = document.createElement("span");
    span.textContent = "No Classes Founded";
    list.appendChild(span);
  } else {
    for (let i = 0; i < classCount.length; i++) {
      let span = document.createElement("span");
      span.textContent = classCount[i];
      list.appendChild(span);
    }
  }
}

list();
