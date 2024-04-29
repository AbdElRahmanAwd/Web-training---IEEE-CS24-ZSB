let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log(haystack.includes(needle) ? "Found " : "Missing");
console.log(haystack.indexOf(needle) >= 0 ? "Found " : "Missing");
console.log(haystack[1] == needle ? "Found " : "Missing");
