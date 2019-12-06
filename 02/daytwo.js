const fs = require('fs')
const path = require("path");
function generateFilePath(givenPath) {
    return path.resolve(__dirname, givenPath)
}
const opArray = fs.readFileSync(generateFilePath("daytwo.txt"), "utf-8").split(",").map((number) => Number(number))
console.log(opArray)
for (let j = 0; j < 100; j++) {
    for (let k = 0; k < 100; k++) {

        const newArray = [...opArray]
        newArray[1] = k
        newArray[2] = j
        for (let i = 0; i < newArray.length; i = i + 4) {
            const operation = newArray[i]
            if (operation == 1) {
                const addedValue = newArray[newArray[i + 1]] + newArray[newArray[i + 2]]
                const indexToStore = newArray[i + 3]
                newArray[indexToStore] = addedValue
            }
            if (operation == 2) {
                const multipledValue = newArray[newArray[i + 1]] * newArray[newArray[i + 2]]
                const indexToStore = newArray[i + 3]
                newArray[indexToStore] = multipledValue
            }
            if (operation == 99) {
                break
            }
        }
        if (newArray[0] == 19690720) {
            console.log(newArray)
        }
    }
}
console.log(opArray)