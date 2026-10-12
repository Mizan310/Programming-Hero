/***
 * upto 100 products: ---> per product price under 100 tk
 * more than 101-200 products: ---> pay 90 tk
 * more than 200 products: ---> pay 70 tk
 */

function discountedPrice(quantity){
    if(quantity <= 100) {
        const total = quantity * 100
        return total
    }
    else if(quantity > 100 && quantity <= 200) {
        const total = quantity * 90
        return total
    }
    else{
        const total = quantity * 70
        return total
    }
}

const productPrice = discountedPrice(100)
console.log(productPrice);
