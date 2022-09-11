import { convertWord } from './site/phonate.js'
import { distance } from 'fastest-levenshtein'
import nReadlines from 'n-readlines'

const [,, inputPath] = process.argv

const broadbandLines = new nReadlines(inputPath)

let line
let lineNumber = 1

let maxCost = 0
let mostExpensiveWord = ''

let totalCost = 0
let totalCount = 0
while (line = broadbandLines.next()) {
  const [word, countString] = line.toString('utf8').split(' ')
  const count = Number(countString)
  const phonetic = convertWord(word)
  const levenshtein = distance(word, phonetic)
  const cost = count*levenshtein

  if(cost>maxCost) {
      maxCost = cost
      mostExpensiveWord = `${word} -> ${phonetic}`
  }

  totalCost += cost
  totalCount += count

  lineNumber++
  if (lineNumber > 100000) {
    break
  }
}


const averageCost = totalCost/totalCount
console.log({averageCost}, {mostExpensiveWord})
