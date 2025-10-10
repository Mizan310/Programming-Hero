/**Variable declaration (const, let, var) */
/** 1. const--> value not going to change */
/** 2. let --> value might change */
/** 3. should not use */

// primitive data types
const name = "Johny"
const age = 23
const isPoor = false // boolean
const price = 500

// console.log(price);

// non-primitive datatypes
const friends = ['Elon', 'Mark', 'Bill', 'Jeff'] // Array
// Object
const student = {
    name: 'Mizan',
    class: 12,
    age: 19,
    address: 'Kafrul'
}
console.log(student.age);
console.log(student['address']);

// condition
if (age > 18) {
    console.log('You are senior student');
    
}
else if (age === 18) {
    console.log('You are adult now')
}
else {
    console.log('You are not senior student');

}

// while loop
let  pushUp = 0
while (pushUp <= 10) {
    console.log('Push us done', pushUp);
    pushUp++
}

// for loop
for(let i = 0; i < 10; i++) {
    console.log(i);
    
}

// do while loop
let i = 0
do {
    console.log('do while loop', i);
    i++
} while (i < 10)

