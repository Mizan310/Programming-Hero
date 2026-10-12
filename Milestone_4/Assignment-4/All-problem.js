// problem-01

function totalFine(fare) {
    // You have to write your code here
    if (typeof fare === "string" || typeof fare <= 0) {
        return "Invalid"
    }
    const fine = fare + fare * (20 / 100) + 30
    return fine
}

// problem-02

function onlyCharacter(str) {
    // You have to write your code here
    if(typeof str !== 'string') {
        return "Invalid"
    }
    let result = " "
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " ") {
            result = result + str[i].toUpperCase()
        }
    }
    return result
}

// problem-03

function bestTeam(player1, player2) {
    // You have to write your code here
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid"
    }
    const brokenTeam1 = player1.foul + player1.cardR + player1.cardY
    const brokenTeam2 = player2.foul + player2.cardR + player2.cardY
    if (brokenTeam1 < brokenTeam2) {
        return player1.name
    }
    else if (brokenTeam2 < brokenTeam1) {
        return player2.name
    }
    else {
        return "Tie"
    }
}

// problem-04

function isSame(arr1, arr2) {
    // You have to write your code here
    if(Array.isArray(arr1) === false || Array.isArray(arr2) === false || !Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid"
    }
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

// Problem-05

function resultReport(marks) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let sum = 0, fail = 0, pass = 0;
    for (const num of marks) {
        sum += num;
        if (num < 40) {
            fail++;
        }
        else {
            pass++;
        }
    }
    let finalScore = parseInt(sum / marks.length);
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    else {
        return { finalScore: finalScore, pass: pass, fail: fail };
    }
}