// console.log('We are using function');

function hello() {
    console.log('We are using function');
}

hello() // fun ke call kortechi
// const 
// var money = 4500
function moneybag() {
    var money = 4500
    console.log("I have " + money + " Taka");

}
moneybag()
// console.log(money);

let sum = 0
function Sum(input1, input2) {
    sum = input1 + input2
    console.log("Sum is " + sum);
}
let input1 = 700
let input2 = 900
Sum(input1, input2)
// ######################################
let sum2 = 0
function Summation(input3, input4) {
    sum2 = input3 + input4
    return sum2 // amra output dekhar jonno return use kori
}

let input3 = 70
let input4 = 90
const result = Summation(input3, input4)
console.log("Sum is " + result);

