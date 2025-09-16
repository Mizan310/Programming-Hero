// practice-1

// const taka = 600;

// if (taka > 500) {
//     console.log('Free coke');
    
// }
// else {
//     console.log('Buy a coke');
    
// }

// Practice-2

// const weight = 64;
// const height = 1.76784;

// const BMI = weight / (height * height);

// if (BMI < 18.5) {
//     console.log('You are underweight');
// }

// else if (BMI >= 18.5 && BMI <= 24.9) {
//     console.log('You are normal');
// }

// else if (BMI >= 25) {
//     console.log('You are Overweight');
// }

// else {
//     console.log('you are obese');
// }

// const marks = 57;

// if (marks >= 90 && marks <= 100) {
//     console.log('A');
    
// }

// else if (marks >= 80 && marks <= 89) {
//     console.log('B');
    
// }


// else if (marks >= 70 && marks <= 79) {
//     console.log('C');
    
// }

// else if (marks >= 60 && marks <= 69) {
//     console.log('D');
    
// }

// else{
//     console.log('F');
    
// }

const yourMarks = 79;
const friendMarks = 59;

if (yourMarks > 80) {
    if (friendMarks > 80){
        console.log('go for a lunch');
        
    }
    else if (friendMarks > 60 && friendMarks < 80) {
        console.log('Go next time better luck');
        
    }
    else if (friendMarks > 40 && friendMarks < 60) {
        console.log('keep your friend\'s message unseen');
        
    }

    else {
        console.log('Block your friend');
        
    }
}

else {
    console.log('sleep and act sad');
    
}
