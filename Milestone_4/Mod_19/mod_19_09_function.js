// Return all the even number of an array using func
// return the sum of all even numbers

function even_sum_Array(numbers) {
    let evens = []
    let sum = 0
    for (const number of numbers) {
        if (number % 2 === 0) {
            evens.push(number)
            sum = sum + number
        }
    }
    return {
        evens: evens,
        sum: sum
    };
}
const arr = [1, 4, 6, 7, 9, 5, 6]
const result = even_sum_Array(arr)

console.log('even numbers are ', result.evens);
console.log('sum of the numbers is', result.sum);