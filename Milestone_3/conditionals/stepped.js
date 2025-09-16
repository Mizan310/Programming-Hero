const price = 2000;

if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount, ' taka have to pay');
}

else if (price > 2500 && price < 5000) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}

else {
    console.log('No discount');
    console.log(price);
}