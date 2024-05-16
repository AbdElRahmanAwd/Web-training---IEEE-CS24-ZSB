let myString = "EElllzzzzzzzeroo";

let string = myString
  .split("")
  .filter((ele, index, array) => array.indexOf(ele) === index)
  .join("");

console.log(string);
// Elzero
