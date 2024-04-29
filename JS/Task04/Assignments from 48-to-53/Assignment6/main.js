let start = 0;
let swappedName = "elZerO";
let swapped = "";

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        swapped += swappedName[i].toUpperCase();
    }else 
        swapped += swappedName[i].toLowerCase();

    }
    console.log(swapped);

// Output
// "ELzERo"