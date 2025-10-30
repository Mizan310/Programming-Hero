// Sum of all number in an array using func

function sumArray(numbers) {
    let sum = 0
    for(const number of numbers) {
        console.log(number);
        sum = sum + number
    }
    return sum
    
}
const arr = [1, 4, 6, 7, 9, 5, 6]
const sum = sumArray(arr)
console.log('Sum of numbers is ', sum);
