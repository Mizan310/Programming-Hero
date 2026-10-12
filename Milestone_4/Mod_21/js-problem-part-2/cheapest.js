const phones = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
    { name: 'Xiaomi', price: 18000, camera: '12mp', color: 'black'},
    { name: 'Oppo', price: 25000, camera: '12mp', color: 'black'},
    { name: 'Iphone', price: 150000, camera: '12mp', color: 'black'},
    { name: 'Walton', price: 18000, camera: '12mp', color: 'black'},
    { name: 'HTC', price: 23000, camera: '12mp', color: 'black'}
]

function cheapestPhone(phones) {
    let min = phones[0]
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone
        }
    }
    return min
}

function expensivePhone(phones) {
    let max = phones[0]
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone
        }
    }
    return max
}

const cheap = cheapestPhone(phones)
console.log(cheap);

const expensive = expensivePhone(phones)
console.log(expensive);

