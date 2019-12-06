const fs = require('fs')
const path = require("path");
function generateFilePath(givenPath) {
    return path.resolve(__dirname, givenPath)
}
const numbers = fs.readFileSync(generateFilePath("dayone.txt"), "utf-8").split("\n")
console.log(numbers)

let totalGas = 0
numbers.forEach((number) => {
    totalGas = totalGas + calculateFuel(number)
})
function calculateFuel(number, fuelTotal = 0) {
    const gasUsed = Math.floor((number / 3)) - 2
    if (gasUsed <= 0) {
        return fuelTotal
    } else {
        fuelTotal = fuelTotal + gasUsed
        return calculateFuel(gasUsed, fuelTotal)
    }
}
console.log(totalGas)