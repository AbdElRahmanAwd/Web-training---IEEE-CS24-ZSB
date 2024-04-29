let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Abdo" , "Elzero"];
let my2 = my;
let my3 = my;

my2 = my2.slice(zero,counter + 1).reverse();
console.log(my2); // ["Osama" , "Elham", "Mazero", "Ahmed"]


console.log(my2.slice(zero+1,counter)); // ["Elham", "Mazero"]

my3 = my3.pop();
console.log(`"${my3}"`); // "Elzero"
console.log(`"${my3[counter+1]}${my3[my3.length-1].toUpperCase()}"`); // "rO"