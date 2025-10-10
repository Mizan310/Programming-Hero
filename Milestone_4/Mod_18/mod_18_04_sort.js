// const numbers = [5, 1, 9, 3, 6, 60, 34, 4, 2, 8, 7]
// console.log(numbers);
// const sorted = numbers.sort()
// console.log(sorted);

const numbers = [5, 1, 9, 3, 6, 60, 34, 4, 2, 8, 7]
const sorted = numbers.sort((a, b) => a - b)
console.log(sorted);

const numbers_00 = [5, 1, 9, 3, 6, 60, 34, 4, 2, 8, 7]
const sorted_00 = numbers.sort((a, b) => b - a)
console.log(sorted_00);

const numbers_01 = [5, 1, 9, 3, 6, 60, 34, 4, 2, 8, 7]
const sorted_01 = numbers_01.sort((a, b) => {
    if (a < b) return -1;  // a should come before b
    if (a > b) return 1;   // a should come after b
    return 0;              // a and b are equal
})
console.log(sorted_01);

// Wrong way
const numbers_1 = [5, 1, 9, 3, 6, 60, 34, 4, 2, 8, 7]
// console.log(numbers);
numbers_1.sort()
// console.log(numbers)

const friends = ['Sakib', 'Rakib', 'Akib', 'Mizan', 'Sijan']
friends.sort()
// console.log(friends);

const ages = [23, 45, 12, 56, 87, 34, 54, 2, 1, 6, 8]
// ages.sort()
// console.log(ages);
// Ascending order 1 - 100 or a - z 
const sortedAgesAscending = ages.sort(function (a, b) { return a - b })
console.log(sortedAgesAscending);

// Descending order 100 - 1 or z to a
const sortedAgesDescending = ages.sort(function (a, b) { return b - a })
console.log(sortedAgesDescending);


