function sevenBoom(...array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().includes("7")) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}

console.log(sevenBoom(1, 5, 6, 4, 7));
