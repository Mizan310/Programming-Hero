let friends = ['Motu', 'patlu', 'chingam', 'Rajanikant', 'patlu', 'chingam']
console.log(friends);

// 1st theke data ber kore deya
const firstOut1 = friends.shift() 
console.log(firstOut1)
console.log(friends);

const firstOut2 = friends.shift()
console.log(firstOut2)
console.log(friends);

// friends.shift('Motu', 'patlu') // That is not possible
// console.log(friends);


friends.unshift('Guttu', 'Buttu')
console.log(friends)
console.log(friends.length)


