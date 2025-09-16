/**
 * Ternary --> Three parts
 * 
 *--->> condition ? true : false;
 * 
 *--->> condition ? do something when true : do something when false; 
 */

const age = 17;

// Simple if else

// if (age >= 18) {
//     console.log('You can vote');
    
// }
// else {
//     console.log('You can not able to vote');
    
// }

// simple ternary:

// age >= 18 ? console.log('You can vote') : console.log('You can not able to vote');

let price = 1700;
const isLeader = false;

// if (isLeader === false) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;

// Optional

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}

// console.log(price);

 
// Feel free to ignore this one

// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
price = isLeader === true ? 
    price > 1000 ? 
        price / 2 : 0 
    : price + 1000;

