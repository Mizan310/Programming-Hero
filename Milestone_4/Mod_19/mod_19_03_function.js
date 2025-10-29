// function vaatKhao() {
//     console.log('hand wash kore aso');
//     console.log('boso');
//     console.log('plate e khabar dhabar nao');
//     console.log('gopat gopat kore khao');
// }
// vaatKhao()

function square(number){
    console.log('Value of the number of the parameter: ', number);
    const sqr = number * number
    return sqr
}
const result = square(5)
console.log("square of the given number is: ", result);

console.log("********************************");

// function square(number){
//     console.log('Value of the number of the parameter: ', number);
//     const sqr = number * number
//     console.log("square of the given number is: ", sqr);
// }
// square(5)
// square(12)
// square(10)


function add(num1, num2) {
    const sum = num1 + num2
    console.log(sum);
}
add(5, 7)
add(45, 76)

function addAll(a, b, c, d){
    const total = a+b+c+d
    console.log(total);
}
addAll(45, 56, 23, 14)
