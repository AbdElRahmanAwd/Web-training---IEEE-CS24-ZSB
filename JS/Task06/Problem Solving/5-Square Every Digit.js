let squareDigits = (arr) =>
  parseInt(
    arr
      .toString()
      .split("")
      .map((ele) => ele * ele)
      .join("")
  );
console.log(squareDigits(9119));
