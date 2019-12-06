const fs = require('fs')
const path = require("path");
function generateFilePath(givenPath) {
    return path.resolve(__dirname, givenPath)
}
let [lineOne, lineTwo] = fs.readFileSync(generateFilePath("day3.txt"), "utf-8").split("\n")
lineOne = lineOne.split(",")
lineTwo = lineTwo.split(",")

console.log(lineOne)


function calculateLinePositions(line) {
    let hits = []
    let currentPos = {
        x: 0,
        y: 0
    }
    let totalDistanceOfLine = 0
    for (const command of line) {
        const amount = command.substring(1)
        if (command.startsWith("L")) {
            for (let i = 0; i < amount; i++) {
                totalDistanceOfLine++

                currentPos.x = currentPos.x - 1
                hits.push({ ...currentPos, totalDistanceOfLine })
            }
        }
        if (command.startsWith("R")) {
            for (let i = 0; i < amount; i++) {
                totalDistanceOfLine++

                currentPos.x = currentPos.x + 1
                hits.push({ ...currentPos, totalDistanceOfLine })
            }
        }
        if (command.startsWith("U")) {
            for (let i = 0; i < amount; i++) {
                totalDistanceOfLine++

                currentPos.y = currentPos.y + 1
                hits.push({ ...currentPos, totalDistanceOfLine })
            }
        }
        if (command.startsWith("D")) {
            for (let i = 0; i < amount; i++) {
                totalDistanceOfLine++

                currentPos.y = currentPos.y - 1
                hits.push({ ...currentPos, totalDistanceOfLine })
            }
        }
    }
    return hits
}
const lineOneHits = calculateLinePositions(lineOne)
console.log(lineOneHits)
const lineTwoHits = calculateLinePositions(lineTwo)
console.log(lineTwoHits)
const map = new Map()
for (const i in lineTwoHits) {
    const lineTwoHit = lineTwoHits[i]
    map.set(`${lineTwoHit.x},${lineTwoHit.y}`, lineTwoHit.totalDistanceOfLine)
}
let intersections = []
let iteration = 0
for (const lineOneHit of lineOneHits) {
    console.log(lineOneHits.length - iteration)
    iteration++
    if (map.has(`${lineOneHit.x},${lineOneHit.y}`)) {
        const lineOneIteration = map.get(`${lineOneHit.x},${lineOneHit.y}`)
        const totalDistance = lineOneIteration + lineOneHit.totalDistanceOfLine
        intersections.push({ ...lineOneHit, totalDistance: totalDistance })
    }
}
console.log(intersections)

let lowestTotal = Infinity
for (let intersection of intersections) {
    // const distance = Math.abs(intersection.x) + Math.abs(intersection.y)
    if (intersection.totalDistance < lowestTotal) {
        lowestTotal = intersection.totalDistance
    }
}

console.log(lowestTotal)