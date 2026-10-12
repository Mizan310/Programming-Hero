const date = new Date();
console.log(date);

console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());


const specificDate = new Date(2091, 0, 1);
console.log(specificDate);
specificDate.setMonth(10)
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleDateString('en-GB'));

// Unix epoch

