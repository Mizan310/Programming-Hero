const college = {
    name: 'vnc',
    class: [11, 12],
    events: ['Science fair', 'Bijoy dibosh', '21 Feb'],
    speciality: {
        color: 'Blue',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }
}


console.log(college);
console.log(college.speciality.color);
console.log(college.speciality.result);
console.log(college.speciality.result.gpa);
console.log(college.speciality.result['gpa']);


college.speciality.result.merit = 'top top top most'
console.log(college['speciality'].result.merit);
console.log(college);

console.log(college.events);
console.log("Previous one ", college.events[1]);
college.events[1] = '36 july'
console.log("New one ", college.events);
console.log(college);

delete college['class']
// delete college.class // same thing
console.log(college);