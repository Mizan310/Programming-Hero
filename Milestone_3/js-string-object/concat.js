const first = 'Abid'
const last = 'Nabid'
// Concatenate
// const fullName = first + last
const fullName = first +" "+ last

// console.log(fullName);

const fullNam2 = first.concat(" ").concat(last)
console.log(fullNam2);

// Includes -- Search specific word/words
console.log(last.includes('id')); // true
console.log(last.includes('x')); // false

