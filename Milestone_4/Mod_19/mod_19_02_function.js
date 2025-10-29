// Recipe
// We will create a recipe--> called function
// and we use it again and again
// ingredients are like a parameters/arguments
// when we start to cooking that's mean we are calling a function
// Recipe instruction is like a body of the function
// The full curry is return value

// function fun_name(parameter_1, parameter_2) {
//     // fun body
//     // return result 
// }

function sum(x, y) {
    const result = x + y
    return result
}
const total = sum(5, 3)
console.log(total);

function macherTorkari(mach, sobji, moshla, oil) {
    console.log(oil + " tel gorom korun");
    console.log(moshla + " Moshla foran");
    console.log(sobji + " Sak sobji din");
    console.log(mach + " din");
    
    return "Susshadu macher torkari ready"
}
const result = macherTorkari("Hilsha", "Potato", "Kacha", "Teer")
console.log(result);


