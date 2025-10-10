// Copy
// let price = 25
// let comp_price = price

// price = 20
// comp_price = 15
// console.log(price, ' ', comp_price);

let products = [25, 25, 25]
let comp_products = []
// let comp_products = products
for(const product of products) {
    comp_products.push(product)
}
products[0] = 55
comp_products[1] = 15
console.log(products);
console.log(comp_products);

// Another way to copy an array
// const numbers = [1,2,3,4,5]
// const new_numbers = Array.from(numbers)

// new_numbers.push(8)

// console.log(numbers);
// console.log(new_numbers);

// Another way to copy an array

// const new_numbers2 = [].concat(numbers)

// new_numbers2.push(18)
// console.log(numbers);
// console.log(new_numbers2)

// Another way to copy an array
// const new_numbers3 = [...numbers]

// numbers.push(7)
// new_numbers3.push(99)
// console.log(numbers);
// console.log(new_numbers3);


// shallow copy vs deep copy
