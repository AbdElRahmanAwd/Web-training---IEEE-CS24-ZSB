function ageInTime(theAge) {
  if ((theAge > 100) | (theAge < 10)) {
    return "Age Out of Range";
  }
  return `  ${theAge * 12} Months
  ${theAge * 365} Days
  ${theAge * 365 * 24} Hours
  ${theAge * 365 * 24 * 60} Minutes
  ${theAge * 365 * 24 * 60 * 60} Seconds`;
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
