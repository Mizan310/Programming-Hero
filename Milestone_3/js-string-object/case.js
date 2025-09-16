const school = "Raj UK Uttara model school"
console.log(school);
console.log(school.toLowerCase()); // convert it lower case
console.log(school.toUpperCase());
// Js is a Case sensitive language
const subject = 'Chemistry'
const book = 'chemistry'
if(subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading book, ei bar exam e kop dibo');
    
}
else {
    console.log('Hudai hudai parbo na kicchu');
    
}

const drink = 'water'
const liquid = '  water'

if(drink.trim() === liquid.trim())
{
    console.log("Matched these");
    
}
else {
    console.log("Doesn't match these");
    
}
