let names = (...array) => `String [${array.join("], [")}] => Done `;

console.log(names("Ahmed", "Eman", "Osama", "Gamal"));

let myNumbers = [20, 50, 10, 60];

let calc = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) sum -= numbers[i];
    else sum += numbers[i];
  }
  return sum;
};

console.log(calc(...myNumbers));
