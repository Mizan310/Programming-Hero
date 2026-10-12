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

const str = onlyCharacter("  h e llo wor   ld")
console.log(str);
