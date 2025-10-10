const numbers = [1, 2, 3, 4, 5, 6]
const reversed = numbers.reverse()
console.log(reversed);

// for loop
const newNumbers = []
for (let i = numbers.length - 1; i >= 0; i--) {
    newNumbers.push(numbers[i])
    // console.log(newNumbers.reverse());
}
console.log(newNumbers.reverse());

const numbers_3 = [1, 2, 3, 4, 5, 6]
const newNumbers_3 = []
for (let i = 0; i < numbers_3.length; i++) {
    newNumbers_3.unshift(numbers_3[i])
    // console.log(newNumbers2);
}
console.log(newNumbers_3);

// for of loop
const numbers_1 = [1, 2, 3, 4, 5, 6]
const newNumbers_1 = []
for (const number of numbers_1) {
    newNumbers_1.push(number)
}
console.log(newNumbers_1.reverse())

const numbers_1_1 = [1, 2, 3, 4, 5, 6]
const newNumbers_1_1 = []
for (const number_1 of numbers_1_1) {
    newNumbers_1_1.unshift(number_1)
}
console.log(newNumbers_1_1)


// for each loop
const numbers_2 = [1, 2, 3, 4, 5, 6]
const newNumbers_2 = []
numbers_2.forEach(numbers_2 => {
    newNumbers_2.unshift(numbers_2)

})
console.log(newNumbers_2);



