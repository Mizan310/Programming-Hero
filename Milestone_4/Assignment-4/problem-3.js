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

const teams = [
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
]
console.log(bestTeam(teams[0], teams[1]));
