/**
 * year % 4 === 0 -- leap year
 * 
 */

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }
    else{
        return false
    }
}

const isLeap = isLeapYear(2034)
console.log(isLeap);


/**
 * 1. which year is (year % 100 !== 0) but those (year % 4 === 0) ---> leap year
 * 2. if year % 400 === 0 --> leap year
 */
function isLeapYear2(year) {
    if(year % 100 !== 0 && year % 4 === 0) {
        return true
    }
    else if (year % 400 === 0) {
        return true
    }
    else{
        return false
    }
}
const isLeap2 = isLeapYear2(2100)
const isLeap3 = isLeapYear2(2400)
const isLeap4 = isLeapYear2(1900)
const isLeap5 = isLeapYear2(2052)

console.log(isLeap2, isLeap3, isLeap4, isLeap5);
