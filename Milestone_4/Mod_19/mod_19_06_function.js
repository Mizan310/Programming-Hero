function add(number1, number2){
    const total = number1 + number2
    return total
}



function add2(number1, number2){
    return number1 + number2
    
}
const result1 = add(5, 6)
const result2 = add2(5, 19)

console.log(result1, result2);
console.log("---------------------------");

function doMath(num1, num2) {
    const sum = num1 + num2
    let diff
    if(num1 > num2) {
        diff = num1 - num2
        // return diff
    }
    else{
        diff = num2 - num1
        // return diff
    }
    const mul = num1 * num2
    const div = num1/num2
    return {
        sum: sum,
        diff: diff,
        mul: mul,
        div: div
    };
}

const result = doMath(20, 30)
console.log(result);

// Odd and Even number 

function isEven(num){
    if(num%2 === 0){
        return true
    }
    else {
        return false
    }
}
const resultEven = isEven(20)
console.log(resultEven);

console.log(isEven(45));

function isOdd(num){
    if(num%2 === 1){
        return true
    }
    return false
}

console.log(isOdd(5));
console.log(isOdd(6));




