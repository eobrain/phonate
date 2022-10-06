import { convertWord } from './phonate.js'
import distance from './levenshtein.js'
import nReadlines from 'n-readlines'
const Readlines = nReadlines

const [, , inputPath] = process.argv
const broadbandLines = new Readlines(inputPath)

let line
const sorted = []

let totalCost = 0
let totalCount = 0
while ((line = broadbandLines.next()) !== false) {
  const [word, countString] = line.toString('utf8').split(' ')
  const count = Number(countString)
  const phonetic = convertWord(word)
  const levenshtein = distance(word, phonetic)

  if (levenshtein > 0) {
    const cost = count * levenshtein
    sorted.push({ cost, word, phonetic })
    sorted.sort((a, b) => b.cost - a.cost)
    if (sorted.length > 100) {
      sorted.pop()
    }
    totalCost += cost
  }

  totalCount += count

  // lineNumber++
  // if (lineNumber > 100000) {
  //  break
  // }
}

const averageCost = totalCost / totalCount
const mostExpensive = sorted.map((a) => `${a.word} -> ${a.phonetic}`)
console.log({ averageCost }, { mostExpensive })
