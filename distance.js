import { convertWord } from './site/phonate.js'
import { distance } from 'fastest-levenshtein'
import nReadlines from 'n-readlines'

const [,, inputPath] = process.argv
const broadbandLines = new nReadlines(inputPath)

let line
const lineNumber = 1

const sorted = []

let totalCost = 0
let totalCount = 0
while (line = broadbandLines.next()) {
  const [word, countString] = line.toString('utf8').split(' ')
  const count = Number(countString)
  const phonetic = convertWord(word)
  const levenshtein = distance(word, phonetic)

  if (levenshtein > 0) {
    const cost = count * levenshtein
    sorted.push({ cost, word, phonetic })
    sorted.sort((a, b) => b.cost - a.cost)
    if (sorted.length > 50) {
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
const mostExpensive = sorted.map(a => `${a.word} -> ${a.phonetic}`)
console.log({ averageCost }, { mostExpensive })
