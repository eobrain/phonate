import phonetic from './phonetic.js'

function matchCase(pattern, word) {
    const n = Math.min(pattern.length, word.length)
    let result = '';
    let i=0;
    let isUpper = false
    for (; i < n; i++) {
        const p = pattern[i]
        const w = word[i]
        isUpper = p.match(/[A-Z]/)
        result += isUpper ? w.toUpperCase() : w
    }
    for (; i < word.length; i++) {
        const w = word[i]
        result += isUpper ? w.toUpperCase() : w
    }
    return result
}

function onReadWord (word) {
  const ph = matchCase(word, phonetic[word.toUpperCase()] || word)
  process.stdout.write(ph)
}

function onReadSep (sep) {
  process.stdout.write(sep)
}

// read input and split into lines
let BUFF = ''
let inWord = false
process.stdin.on('data', (buff) => {
  const content = buff.toString('utf-8')
  for (let i = 0; i < content.length; i++) {
    if (content[i].match(/[A-Za-z]/)) { // word
      // sep -> word
      if (!inWord) {
        onReadSep(BUFF)
        BUFF = ''
        inWord = true
      }
    } else { // sep
      // sep -> word
      if (inWord) {
        onReadWord(BUFF)
        BUFF = ''
        inWord = false
      }
    }
    BUFF += content[i]
  }
})

// flush last line
process.stdin.on('end', () => {
  if (BUFF.length > 0) {
    if (inWord) {
      onReadWord(BUFF)
      BUFF = ''
    } else {
      onReadSep(BUFF)
      BUFF = ''
    }
  }
})
