let isOmnipresent = (arr, value) => arr.every((ele) => ele.includes(value));

console.log(
  isOmnipresent(
    [
      [1, 2, 3, 4, 5],
      [1, 6],
      [5, 4],
    ],
    1
  )
);
