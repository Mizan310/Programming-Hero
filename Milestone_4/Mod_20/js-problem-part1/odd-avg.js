/**
 * function takes an array as parameter
 * give me the avg of the odd numbers in the array
 */

/**
 * 1. put odd number in an array
 * 
 */

function oddAvg(numbers){
    const odds = []
    for(const number of numbers){
        if(number%2===1){
            // console.log(number);
            odds.push(number)
        }
    }
    console.log(odds)
    let sum = 0
    for(const number of odds) {
        sum = sum + number
    }
    console.log(sum);
    
    // let count = odds.length // Short cut way
    let count = 0
    for(const num of odds){
        count = count + 1
    }
    console.log(count);

    const avg = sum / count
    // console.log(avg);
    return avg
}
const numbers = [43, 12, 56, 98, 81, 87, 94, 93, 7, 5]
const avg = oddAvg(numbers)
console.log('Avg of the odd numbers is: ', avg);
