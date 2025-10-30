const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'Black',
    camera: '12MPx',
    isNew: true,
};
// for of --> array
// for in --> object
for (const prop in mobile){
    console.log(prop, ":", mobile[prop]);
    // console.log(mobile[prop]);
}

const keys = Object.keys(mobile)
console.log(keys);

for (const key of keys) {
    console.log(key, ":", mobile[key])
    // console.log(mobile[key]);
    
}
