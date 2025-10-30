// # Various farams
/**
 * for a given string tell me weather it has even number of characters or not
 */
function evenSizedString(str) {
    const size = str.length
    console.log(str, size);
    if (size % 2 === 0) {
        console.log("even size");
        return true
    }
    else {
        console.log("Odd Size");
        return false
    }
}
// evenSizedString("Dhaka")
// evenSizedString("faka")

// const result = evenSizedString("Dhaka")
// console.log(result);

function doubleOrTriple(number, doDouble) {
    if(doDouble === true) {
        const result = number * 2
        return result
    }
    else{
        const result = number * 3
        return result
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers) {
    const length = numbers.length
    return length
}
console.log(numberOfElements([12, 13, 45, 54,65,767,87,34]));

function getAge(person) {
    const age = person.age
    return age
}

const ageIs = getAge(12)
console.log(ageIs);





