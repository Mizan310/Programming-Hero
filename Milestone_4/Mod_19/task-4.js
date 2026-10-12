function count_zero(string) {
    let count = 0
    for (const str of string){
        if(str === "0"){
            count = count + 1
        }
    }
    return count
}
const string = "1001001"
const result = count_zero(string)
console.log(result);
