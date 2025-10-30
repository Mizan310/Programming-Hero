// Value Access

const person = {
    name: "Mizanur Rahman",
    age: 25,
    profession: 'Web Developer',
    salary : 35000,
    marriedStatus: true,
    'fav place': ['Bandarban', 'Saint Martin', 'Kuakata']
};

// If we want to give a space on variable name then we have to print it like that way 

console.log(person["fav place"]);
// or,
const fav_place = person["fav place"]
console.log(fav_place);


// 1st way
console.log(person);

// 2nd way - just can find specific one property (dot notation)
console.log(person.age);
//  we can take there a variable like that way
const income = person.salary
console.log(income);

// 3rd - brackets notation [] - diye
// way 1
console.log(person['age']);
// we can take there a variable like that way
// way 2
const boyosh = person['age']
console.log(boyosh);

// Another way to print any of the value
const keyName = 'profession'
console.log(person[keyName])


