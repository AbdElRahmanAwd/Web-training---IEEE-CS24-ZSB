let n1 = [10, 30, 10, 20];
let n2 = [10, 30, 10];

console.log(Math.max(...n1, ...n2) * [...n1, ...n2].length); // 210
