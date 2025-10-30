// Value change 

const person = {
    name: "Mizanur Rahman",
    age: 25,
    profession: 'Web Developer',
    salary : 35000,
    marriedStatus: true,
    'fav place': ['Bandarban', 'Saint Martin', 'Kuakata']
};
console.log(person);

// if i want to change any of the object key value-
// way 1
person.salary = 50000

// way 2
person['age'] = 45

// way 3
person['fav place'] = ['Maldeves', 'Bali', 'Pataya', 'Goa']

// way 4
const propName = 'profession'
person[propName] = 'DevOps developer'

//
person.marriedStatus = false

console.log(person);


