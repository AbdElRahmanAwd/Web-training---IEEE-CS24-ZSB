let index = 10;
let jump = 2;
for (;;) {
    console.log(index);
    
    index -= jump;
    if (index < 0 || index == jump) break
}

// Output
// 10
// 8
// 6
// 4