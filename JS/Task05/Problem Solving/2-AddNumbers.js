function AddNumbers(number) {
  let result = 0;
  for (var i = 1; i <= number; i++) {
    result += i;
  }
  return result;
}

console.log(AddNumbers(13));
