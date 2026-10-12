/**
 * array has some duplicate element
 * []
 */

const biriyanikhor = ['Mizan', 'Sejan', 'Mizan', 'Hasnat', 'Reza', 'Salman', 'Sajjad', 'Hasnat', 'Faisal', 'Rasel', 'Rasel', 'Mamun'] 
const numbers = [1, 3, 54, 6, 2, 2, 3, 6, 7, 87, 45, 34]

function noDuplicate(array) {
    const unique = []
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique
}

const uniqueArray = noDuplicate(biriyanikhor)
console.log(uniqueArray);

const uniqueArray2 = noDuplicate(numbers)
console.log(uniqueArray2);
