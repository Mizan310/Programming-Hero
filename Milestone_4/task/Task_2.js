const numbers = [12, 98, 5, 41, 23, 78, 46];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i], 'is even');
//     }
// }

function isEvenNumber(number) {
    const evenNumbers = []
    for (let i = 0; i < number.length; i++) {
        if (number[i]%2 === 0) {
            evenNumbers.push(number[i])
        }
    }
    return evenNumbers
}

const result = isEvenNumber(numbers)
console.log('Even numbers are: ', numbers);

console.log(result);
