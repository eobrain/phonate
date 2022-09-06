import phonetic from './phonetic.js'
function onReadWord (word) {
  const ph = phonetic[word.toUpperCase()] || word
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
