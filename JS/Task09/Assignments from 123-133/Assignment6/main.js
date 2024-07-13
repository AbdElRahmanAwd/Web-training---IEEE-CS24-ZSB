let chars = ["Z", "Y", "A", "D", "E", 10, 1];

function task(chars) {
  chars.sort((a, b) => {
    if (typeof a === "number" && typeof b !== "number") return -1;
    if (typeof a !== "number" && typeof b === "number") return 1;
    return 0;
  });
  let index = chars.findLastIndex((e) => typeof e === "number") + 1;
  chars.copyWithin(0, index, 2 * index);
  console.log(chars);
}

task(chars);
