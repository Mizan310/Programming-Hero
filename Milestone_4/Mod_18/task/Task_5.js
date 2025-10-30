// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]


let numbers = [1, 2, 3]
let newNumbers = []
numbers[0] = 99
for (const number of numbers) {
    newNumbers.push(number)
}
console.log(newNumbers);
