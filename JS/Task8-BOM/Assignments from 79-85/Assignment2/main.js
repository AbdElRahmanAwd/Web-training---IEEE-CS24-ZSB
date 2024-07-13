// Method One
let objMethodOne = {
  property: "abdo",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object();
objMethodTwo.property = "awad";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "smile";

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign(objMethodOne);

console.log(objMethodFour.property); // "Method Four"
