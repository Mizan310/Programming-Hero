const statement = 'I am a hard working person'

// const reversedString = statement.split('').reverse()
// console.log(reversedString.join(''));

// const reversedString = []
// for (const char of statement) {
//     reversedString.unshift(char)
// }
// console.log(reversedString.join(''));

function reversedString(str) {
    const words = str.split(' ')
    const reversedWords = words.reverse()
    const reversedStatement = reversedWords.join(' ')
    return reversedStatement
}

const result = reversedString(statement)

console.log(result);



