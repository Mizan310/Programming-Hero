function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mul(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}

function calculator(a, b, operation) {
    if (operation === 'Add') {
        const result = add(a, b)
        return result
    }
    else if(operation === 'Sub') {
        const result = sub(a, b)
        return result
    }
    else if(operation === 'Mul') {
        const result = mul(a, b)
        return result
    }
    else if(operation === 'Div') {
        const result = div(a, b)
        return result
    }
    else {
        return 'Operation is not allowed'
    }
}

const calculatedValueAdd = calculator(5, 3, 'Add')
console.log(calculatedValueAdd);

const calculatedValueSub = calculator(5, 3, 'Sub')
console.log(calculatedValueSub);

const calculatedValueMul = calculator(5, 3, 'Mul')
console.log(calculatedValueMul);

const calculatedValueDiv = calculator(5, 3, 'Div')
console.log(calculatedValueDiv);


