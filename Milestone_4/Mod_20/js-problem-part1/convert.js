// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12
    return feet
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12
    const result = feetNumber + " Ft " + inchRemaining + " inch "
    return result
}

const shuvoHight = inchToFeet(75)
// console.log(shuvoHight);

const shuvoHight2 = inchToFeet2(75)
console.log(shuvoHight2);


function milesToKelo(miles) {
    const kilo = miles * 1.60934
    return kilo
}

const m = 10
const result = milesToKelo(m)
console.log(result);

function kiloToMiles(km) {
    const miles = km * 0.621371
    return miles
}
const km = 10
const result2 = kiloToMiles(km)
console.log(result2);
