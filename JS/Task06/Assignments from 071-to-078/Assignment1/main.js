let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArray = mix
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .reduce((acc, current) => `${acc}${current}`);

console.log(newArray);
// Elzero
