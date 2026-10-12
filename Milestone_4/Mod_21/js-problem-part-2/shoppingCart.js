// in cart has quantity

const products = [
    {name: 'Shampoo', price: 300, quantity: 4},
    {name: 'Comb', price: 100, quantity: 2},
    {name: 'Shirt', price: 700, quantity: 6},
    {name: 'Pant', price: 600, quantity: 1}
]

function cartTotal(products){
    let total = 0
    for(const product of products){
        const thisProductCost = product.price * product.quantity
        total = total + thisProductCost

    }
    return total
}

const shoppingCost = cartTotal(products)
console.log(shoppingCost);
