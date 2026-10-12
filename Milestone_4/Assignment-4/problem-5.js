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

const final = resultReport(100);
console.log(final);
