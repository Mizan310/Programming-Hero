const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversedColors = []
for (let i = 0; i < colors.length; i++) {
    reversedColors.unshift(colors[i])
}
console.log(reversedColors);
