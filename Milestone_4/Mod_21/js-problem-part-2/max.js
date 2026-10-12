const disha = 56
const salman = 65

if (disha > salman) {
    console.log("Disha will get the strawberry");
}
else {
    console.log("Salman will get the the strawberry");
}

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }
}
// num1 = 67
// num2 = 87
const result1 = getMax(67, 87)
console.log("Biggest result is: ", result1);
const result2 = getMax(777, 56)
console.log("Biggest result is: ", result2);

const ultimateMax = getMax(result1, result2)
console.log(ultimateMax);


