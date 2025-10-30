function doubleIt(number) {
    const doubled = number * 2
    console.log(number, doubled);
}
console.log("I will call the function");
doubleIt(16)
console.log("---------------------------");
doubleIt(88)
console.log("---------------------------");
doubleIt(44)
console.log("---------------------------");

const number = 45
doubleIt(number)

console.log("---------------------------");

const money = 120
doubleIt(money)

console.log("---------------------------");

function difference(num1, num2) {
    const diff = num1 - num2
    // console.log(num1, num2, 'difference is ', diff);
    return diff
}
const FatherAge = 50
const SonAge = 25
const result = difference(FatherAge, SonAge)
console.log(FatherAge, 'and', SonAge,'\'s', 'difference is ', result);


