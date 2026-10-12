const numbers = [300, 100, 700, 1200]

function sum(numbers){
    let sum = 0
    for(const number of numbers){
        sum = sum + number
    }
    return sum
}
const totalSum = sum(numbers)
console.log(totalSum);


const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Comb', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pant', price: 600}
]

function getShoppingTotal(products){
    // console.log(products);
    let sum = 0
    for(const product of products){
        console.log(product);
        sum = sum + product.price
    }
    return sum
    
}

const total = getShoppingTotal(products)
console.log('Total ajke khoshabe: ', total);

