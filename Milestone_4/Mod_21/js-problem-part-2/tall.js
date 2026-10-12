
function getMax(numbers) {
    console.log(numbers);
    // const max = []
    let max = numbers[0]
    for (const num of numbers) {
        if (num > max)
            max = num
    }
    return max
}
const heights = [86, 76, 94, 98, 74, 67]
const max = getMax(heights)
console.log("max is: ", max);
