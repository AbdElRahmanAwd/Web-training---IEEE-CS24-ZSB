let a = 10;

console.log(
  a < 10 ? 10 : a >= 10 && a <= 40 ? "10 To 40" : a > 40 ? "> 40" : "Unknown"
);

let st = "Elzero Web School";

if ((st.length + st.length).toString() == "34") {
  console.log("Good");
}
if (st.charAt(st.indexOf("W")) === "W") {
  console.log("Good");
}
if (!(st === "number")) {
  console.log("Good");
}
if (st.slice(0 ,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
