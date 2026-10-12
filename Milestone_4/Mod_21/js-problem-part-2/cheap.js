function getMin(numbers) {
    let min = numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num
        }
    }
    return min
}
const prices = [20000, 30000, 12000, 45000, 36000, 15000, 13000, 18000]
const res = getMin(prices)
console.log('cheapest one: ', res);
