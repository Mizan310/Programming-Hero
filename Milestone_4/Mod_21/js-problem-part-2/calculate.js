/**
 * Chair --> 3 cft
 * table --> 10 cft
 * Bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3
    const perTableWood = 10
    const perBedWood = 50

    const ChairTotalWood = perChairWood * chairQuantity
    const TableTotalWood = perTableWood * tableQuantity
    const BedTotalWood = perBedWood * bedQuantity

    const totalWood = ChairTotalWood + TableTotalWood + BedTotalWood
    return totalWood
}

const woodResult = woodQuantity(50, 30, 34)
console.log(woodResult);

