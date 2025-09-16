// for (let i = 150; i > 0; i--) {
//     console.log(i);
//     if (i <= 10) {
//         break;
//     }
// }

// let n = 54;
// while (n >= 30) {
//     console.log(n);
//     if (n <= 34) {
//         break;
//     }
//     n--;
// }

// let n = 54;
// while (n >= 30) {
//     if (n < 34) {
//         break;
//     }
//     console.log(n);
//     n--;
// }
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     sum = sum + i;
//     if(sum === 100) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log(sum);


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let i;
let square = 4;
for (let i = 1; i < 100; i++) {
    let squareAre = square * square;
    if (squareAre === i) {
        console.log(i);
        break;
    }
    console.log(i);
}