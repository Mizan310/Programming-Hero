function getMin(numbers){
    let min = numbers[0]
    for(const num of numbers) {
        if(num < min){
            min = num
        }
    } 
    return min
}


numbers = [86, 76, 94, 98, 74, 67]
const res = getMin(numbers)
console.log("Min number is: ", res);
