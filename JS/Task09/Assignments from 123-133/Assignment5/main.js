let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log([...new Map(Object.entries(theName)).values()]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
