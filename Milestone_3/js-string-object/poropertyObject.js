const person = {
    name: "Mizanur Rahman",
    age: 25,
    profession: 'WD',
    salary : 35000,
    marriedStatus: true,
};

// 1st way
console.log(person);

// 2nd way - just can find specific one property (dot notation)
console.log(person.age);
//  we can take there a variable like that way
const income = person.salary
console.log(income);

// 3rd - brackets notation [] - diye
console.log(person['age']);
//  we can take there a variable like that way
const boyosh = person['age']
console.log(boyosh);


