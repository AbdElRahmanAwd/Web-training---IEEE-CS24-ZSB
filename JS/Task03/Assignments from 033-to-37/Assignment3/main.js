let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

console.log(num3 > num1 ? typeof num2 === typeof num3 ? "ff" : num3 +" Is Larger Than "+ num1 +" And Type string Not The Same Type As number2" : "fff");

console.log(num3 > num1 ?  num3 ==  num2 ? typeof num2 === typeof num3 ? "ff" : num3 + " Is Larger Than "+ num1 +" And Value Is The Same As "+ num3 +" And Type string Not The Same Type As number" : "fff" : "fff");

console.log(num3 == num1 ?  "fff" : num3 ==  num2 ? typeof num2 === typeof num3 ? "ff" : typeof num2 === typeof num3 ? "ff" : "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}" : "fff" );