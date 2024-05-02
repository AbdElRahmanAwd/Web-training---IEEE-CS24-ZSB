function checkboolean(a, b, c) {
  console.log(
    `Hello ${
      typeof a === "string" ? a : typeof b === "string" ? b : c
    }, Your Age Is ${
      typeof a === "number" ? a : typeof b === "number" ? b : c
    }, You Are ${
      typeof a === "boolean"
        ? a == true
          ? ""
          : "Not"
        : typeof b === "boolean"
        ? b == true
          ? ""
          : "Not"
        : c == true
        ? ""
        : "Not"
    } Available For Hire`
  );
}

// Needed Output
checkboolean("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkboolean(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkboolean(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkboolean(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
