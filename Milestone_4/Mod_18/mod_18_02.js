const fruits = ['Apple', 'Banana', 'Anar', 'Grape', 'Watermelon']
// const newFruits = fruits.map(fruits => fruits.toLowerCase())
// console.log(newFruits)

// Alternative
// for loop only
const newFruits = []
for (let i = 0; i < fruits.length; i++) {
    newFruits.push(fruits[i].toLowerCase());
    console.log(fruits[i]);
    
}
console.log(newFruits);

// for of loop
const newFruits2 = []
for (const fruit of fruits) {
    newFruits2.push(fruit.toLowerCase())
    console.log(fruit);
    
}
console.log(newFruits2);

// for each loop
const newFruits3 = []
fruits.forEach(fruit => {
    newFruits3.push(fruit.toLowerCase())
    console.log(fruit);
})
console.log(newFruits3);

let k = 0
while (k < fruits.length) {
    console.log(fruits[k]);
    k++
}

const prices = [200, 500, 400, 300, 600]
let n = 0
while (n < prices.length) {
    console.log(prices[n]);
    n++
    
}