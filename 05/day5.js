const fs = require('fs')
const path = require("path");
function generateFilePath(givenPath) {
    return path.resolve(__dirname, givenPath)
}
const opArray = fs.readFileSync(generateFilePath("day5.txt"), "utf-8").split(",").map((number) => Number(number))
console.log(opArray)
const INPUT = 1;

for (let i = 0; i < opArray.length;) {
    const operation = opArray[i]
    console.log(operation)
    if (operation == 1) {
        const addedValue = opArray[opArray[i + 1]] + opArray[opArray[i + 2]]
        const indexToStore = opArray[i + 3]
        opArray[indexToStore] = addedValue
        i = +4
    }
    if (operation == 2) {
        const multipledValue = opArray[opArray[i + 1]] * opArray[opArray[i + 2]]
        const indexToStore = opArray[i + 3]
        opArray[indexToStore] = multipledValue
        i += 4
    }
    if (operation == 3) {
        const indexToStore = opArray[i + 1]
        opArray[indexToStore] = INPUT
        i += 2
    }
    if (operation == 4) {
        const index = opArray[i + 1]
        console.log(opArray[index])
        i += 2
    }
    if (operation == 99) {
        break
    }
}

console.log(opArray)