let friends = ['Motu', 'patlu', 'chingam', 'Rajanikant', 'patlu', 'chingam']

console.log(friends.includes('chingam')); // true

friends.shift()
console.log(friends.includes('Motu')) // false


if (friends.includes('Motu')) {
    console.log('Samocha nia asho')
}

else {
    console.log('Samocha lagbe na')
}

