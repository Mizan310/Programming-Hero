// Const

const salary = 25000; // When we use is then we can not change the value of this.
const isBCS = false;
const height = 61;

if (salary > 20000 || isBCS == false || height > 66) {
    console.log('He is able to live in this city');
}

else {
    console.log('He is unable to live');
}

const salary1 = 25000; // When we use is then we can not change the value of this.
const isBCS1 = false;
const height1 = 61;

if (salary1 > 20000 && isBCS1 == false && height1 > 66) {
    console.log('He is able to live in this city-1');
}

else {
    console.log('He is unable to live-1');
}

// More and more

const salary2 = 25001; // When we use is then we can not change the value of this.
const isBCS2 = true;
const height2 = 68;

if (salary2 > 25000 || isBCS2 == true || height2 > 72) {
    console.log('He is able to live in this city-2');
}

else {
    console.log('He is unable to live-2');
}


//  ------------- Complex condition
const salary3 = 25001; // When we use is then we can not change the value of this.
const isBCS3 = false;
const height3 = 61;
const hasCar3 = false;

if ((salary3 > 25000 && hasCar3 == false) || isBCS3 == true) {
    console.log('They are agree');
}
else {
    console.log('They are not agree');
    
}