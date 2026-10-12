/**
 * Multi-layer discount
 * First layer: 100 (no discount)
 * Second layer - 101 to under 200: get 90 tk per product
 * Third layer - above 200: get 70 tk per product
 */

function layeredDiscount(quantity) {
    const first100Price = 100
    const second100Price = 90
    const remainingQuantityPrice = 70

    if (quantity <= 100) {
        const total = quantity * first100Price
        return total
    }
    else if (quantity >= 101 && quantity <= 200) {
        const first100Total = 100 * first100Price
        const remainingQuantity = quantity - 100
        const remainingTotal = remainingQuantity * second100Price
        const total = remainingTotal + first100Total
        return total
    }
    else {
        const first100Total = 100 * first100Price
        const second100Total = 100 * second100Price
        const remainingQuantity = quantity - 200
        const remainingTotal = remainingQuantity * remainingQuantityPrice
        const total = remainingTotal + first100Total + second100Total
        return total
    }
}

const result = layeredDiscount(250)
console.log(result);
