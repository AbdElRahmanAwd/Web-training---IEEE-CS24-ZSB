let a = "Elzero Web School";

console.log(a.slice(2, 6)); // zero

console.log(
  a
    .charAt(a.length - 4)
    .toUpperCase()
    .repeat(8)
); // 8H

console.log(a.split(" ", 1)); // [Elzero]

console.log(a.substr(0, 7) + a.substr(-6)); // Elzero School

console.log(a.substring(0, 2).toLowerCase() + a.substring(2).toUpperCase()); // Elzero Web School
