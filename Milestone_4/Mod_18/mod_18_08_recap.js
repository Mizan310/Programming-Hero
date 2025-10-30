const books = ['physics', 'js', 'css', 'math']
for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

const rev_book = books.reverse()
console.log(rev_book);

const sorted_books = books.sort()
console.log(sorted_books);

const gadgets = [
    { name: 'laptop', price: 35000, color: 'black' }, // object
    { name: 'watch', price: 5600, color: 'White', brand: 'Samsung' },
    { name: 'Phone', price: 15600, color: 'Black', brand: 'Samsung' }
]

for (const gadget of gadgets) {
    console.log(gadget.name);
}
// 2d array
const matrix = [
    [2, 8, 12],
    [5, 7, 10],
    [56, 76, 19]
]
