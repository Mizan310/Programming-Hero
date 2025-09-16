var orangePrice = 10;
var chocolate = 0.5;
var applePrice = parseInt('20');
var applePrice = parseFloat('20.6');

// number
// console.log(typeof orangePrice); 

// string
// console.log(typeof applePrice); 

// console.log(orangePrice + applePrice);

// console.log(orangePrice);

var first = 0.4;
var second = 0.2;
var total = first + second;
// console.log(typeof total)
// console.log(total.toFixed(3));

// Using Number()
var totalAsString = total.toFixed(3);
var totalAsNumber = Number(totalAsString);

console.log(totalAsNumber);

// Using parseFloat()
var totalAsString2 = total.toFixed(3);
var totalAsNumber2 = parseFloat(totalAsString2);

console.log(totalAsNumber2);


// Const

const num = 50 / 0; // Infinity
console.log(num);
const num1 = 50 / 2;
console.log(num1);
