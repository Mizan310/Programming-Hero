// 1st way
const pen = {brand: 'Matador', price: '5tk', color: 'Black'}
console.log("pen: ",pen);

// 2nd way 
// const pencil = {brand: 'fresh', price: '10tk', color: 'Badami'}
const pencil = new Object() 
pencil.brand = 'Matador and Fresh';
pencil.price = '10tk';
pencil.color = 'Gray';
console.log("Pencil: ",pencil);

// 3rd way

const baseRubber = {
    use : function() {
        console.log('Rubber: ', rubber);
    }
};

const rubber = Object.create(baseRubber);
rubber.brand = 'Matador';
rubber.price = '5tk';
rubber.color = 'Yellow';
rubber.use();


