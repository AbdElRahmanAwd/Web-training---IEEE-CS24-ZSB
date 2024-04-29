let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1,arr2).sort();
allArrs = allArrs.slice(allArrs.indexOf("F"));
allArrs = allArrs.join("").toLowerCase();

console.log(allArrs); // fxy