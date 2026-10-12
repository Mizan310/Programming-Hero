function totalFine(fare) {
    // You have to write your code here
    if (typeof fare === "string" || typeof fare <= 0) {
        return "Invalid"
    }
    const fine = fare + fare * (20 / 100) + 30
    return fine
}


const res = totalFine(200)
console.log(res);
