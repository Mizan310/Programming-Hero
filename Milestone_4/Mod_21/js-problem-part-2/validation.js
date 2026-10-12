function multuply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const mult = num1 * num2
    return mult
}

const result = multuply(5, '7')
// console.log(result);

function fullName(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return 'Provide a string'
    }
    const full = first + ' ' + second
    return full
}

const full_Name = fullName('Mizanur', 5)
// console.log(full_Name);

function getPrice(product) {
    if(typeof product !== 'object') {
        return 'Other type of domain is not allowed'
    }
    const price = product.price
    return price
}

// const price = getPrice({ name: 'samsung', price: 2000, camera: '12mp', color: 'black' })
const price = getPrice(5)
// console.log(price);


//  In jS array is a type of object
function getSecond(numbers){
    console.log(Array.isArray(numbers));
    if(Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    
    // console.log(typeof numbers)
    const second = numbers[1]
    return second
}
// const second = getSecond([1, 45, 76, 65])
// console.log(second);
const third = getSecond(45)
console.log(third);


