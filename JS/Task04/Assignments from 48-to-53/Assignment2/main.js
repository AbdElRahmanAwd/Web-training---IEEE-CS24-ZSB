let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > end; i--){
    if (i == 3) break
        console.log((i < 10) ? `0${i}` : `${i}`);
}