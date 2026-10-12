//  find the smallest name

function findSmall(names) {
    let smallest = names[0]
    for(const name of names) {
        // console.log(name);
        if (name.length < smallest.length){
            smallest = name
        }
    }
    return smallest
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = findSmall(heights2)
console.log(result);
