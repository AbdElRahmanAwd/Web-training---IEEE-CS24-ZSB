let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let newArray = nums.reduce(
  (acc, current) => (current % 2 == 0 ? acc * current : acc + current),
  1
);

console.log(newArray);
