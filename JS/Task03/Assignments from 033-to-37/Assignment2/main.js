let num1 = 9;
let str = "9";
let str2 = "20";

// Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str) {
  if (num1 === str) {
    console.log("{num1} Is The Same Value As {str} And they The Same Type");
  } else {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
  }
}
if (!( num1 == str2 && typeof num1 === typeof str)) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str == str2) {
    if (str2 === str) {
      console.log("{str2} Is The Same Value As {str} And they The Same Type");
    } else {
      console.log("{str2} Is The Same Value As {str} But Not The Same Type");
    }
  }else {
    if (typeof str2 === typeof str) {
        console.log("{str2} Is The Same Type As {str} But Not The Same value");
      } else {
        console.log("{str2} Is not The Same Type As {str} And Not The Same value");
      }
  }

