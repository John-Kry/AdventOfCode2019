const RANGE_LOW = 172851
const RANGE_HIGH = 675869
let availableNumber = 0
for (let number = RANGE_LOW; number <= RANGE_HIGH; number++) {
    console.log(number)
    if (checkForDouble(number) && checkForIncreasingDigits(number)) {
        availableNumber++
    }
}
console.log(availableNumber)
// console.log(checkForDouble(442222))
function checkForDouble(number) {
    let foundDouble = false
    const numberString = String(number)
    let runningCharacter = null
    let runningCharacterCount = 0
    for (const char of numberString) {
        if (char === runningCharacter) {
            runningCharacterCount++

        }
        if (char === runningCharacter && runningCharacterCount > 2) {
            foundDouble = false
        }
        if (foundDouble && char !== runningCharacter) {
            return true
        }
        if (char === runningCharacter && runningCharacterCount == 2) {
            foundDouble = true
        }
        if (char !== runningCharacter) {
            runningCharacterCount = 1
            runningCharacter = char
        }
        // console.log({ char, previousChar, runningCharacter, foundDouble })

        previousChar = char
    }
    return foundDouble
}
function checkForIncreasingDigits(number) {
    const numberString = String(number)
    let previousDigit = 0
    for (const digit of numberString) {
        if (Number(digit) < Number(previousDigit)) {
            return false
        }
        previousDigit = digit
    }
    return true
}
