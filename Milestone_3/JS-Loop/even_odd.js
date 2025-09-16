// let num = 1;
// while (num <= 10) {
//     console.log(num);

//     if(num%2 === 0) {
//         console.log('Even number', num);  
//     }

//     if(num%2 === 1) {
//         console.log('Odd number', num);

//     }
//     num++;
// }


// Even odd both
// for (let num = 0; num < 10; num++) {
//     if (num % 2 === 0) {
//         console.log('Number is Even', num);

//     }
//     else if (num % 2 === 1) {
//     else if (num % 2 !== 0) {
//         console.log('Number is Odd', num);
//     }
// }

// Even
// for (let i = 0; i <= 20; i=i+2) {
//     console.log(i);

// }

// Odd
// for (let i = 1; i <= 20; i=i+2) {
//     console.log(i);

// }

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);
