let getAbsSum = (array) =>
  array.reduce((acc, current) => acc + Math.abs(current), 0);

console.log(getAbsSum([-3, -4, -10, -2, -3]));
