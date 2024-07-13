let range = window.prompt("Print Number From – To", "Example: 5-20");
let nums = range.split("-");
let num1 = parseInt(nums[0]);
let num2 = parseInt(nums[1]);

for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
  console.log(i);
}
