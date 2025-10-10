const numbers = [1,2,3,4,5]
const players = [{}, {}, {}]
const employees = [
    {name: 'Ashik', age: 23, position: 'Mid category Developer', salary: 50000},
    {name: 'Mshikul', age: 24, position: 'Sr category Developer', salary: 60000},
    {name: 'Mizan', age: 24, position: 'Jnr category Developer', salary: 40000}
]
employees[0].name = 'Sakib'

// console.log(employees[1].name);
// console.log(employees[1].position);
// for (const employee of employees) {
//     console.log(employee);
//     console.log(employee['name'].toUpperCase())
//     console.log(employee.position, employee.salary);
// }

for (const employee of employees) {
    const person = employee
    const personInfo = person.name + ' works as a ' + person.position + ' and earns' + ' ' + person.salary
    console.log(personInfo);
    
}

