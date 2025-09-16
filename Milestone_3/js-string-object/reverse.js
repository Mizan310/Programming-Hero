// Reverse system - 01

const sentence = 'I am learning web development'
console.log(sentence);
let reverse = ''
for (const letter of sentence){
    // console.log(letter)
    reverse = letter + reverse
}
console.log(reverse);

// Reverse system - 02

let rev = ''
for (let i = 0; i <sentence.length; i++) {
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i]
    rev = letter + rev
}
console.log(rev);

// Reverse system - 03 (shortcut)

const reversed = sentence.split('').reverse().join('')
console.log(reversed);

// line start from last word

const endToStart = sentence.split(' ').reverse().join(' ')
console.log(endToStart);

