const rate = 15.6;
let input = document.getElementsByName("dollar")[0];

function convert() {
  let value = input.value;
  let ele = document.getElementsByClassName("result")[0];

  if (input) {
    let dollars = parseFloat(value);
    let pounds = (dollars * rate).toFixed(2);
    ele.innerHTML = `{${dollars.toFixed(
      2
    )}} USD Dollar = {${pounds}} Egyptian Pound`;
  } else {
    ele.innerHTML = "0 USD Dollar = 0 Egyptian Pound";
  }
}

// oninput is input Attribute which send always copy of input value
input.setAttribute("oninput", "convert()");
