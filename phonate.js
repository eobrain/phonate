import phonetic from './phonetic.js'

function matchCase (pattern, word) {
  const n = Math.min(pattern.length, word.length)
  let result = ''
  let i = 0
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

export const convertWord = word => matchCase(word, phonetic[word.toUpperCase()] || word)

export function convert (content) {
  let result = ''
  let word = ''
  let inWord = false
  for (let i = 0; i < content.length; i++) {
    if (content[i].match(/[A-Za-z']/)) { // word
      // sep -> word
      if (!inWord) {
        result += word
        word = ''
        inWord = true
      }
    } else { // sep
      // sep -> word
      if (inWord) {
        result += convertWord(word)
        word = ''
        inWord = false
      }
    }
    word += content[i]
  }
  if (word.length > 0) {
    if (inWord) {
      result += convertWord(word)
      word = ''
    } else {
      result += word
      word = ''
    }
  }
  return result
}

export function ph (strings) {
  return strings.map(convert).join('')
}

function onReadWord (word) {
  const ph = matchCase(word, phonetic[word.toUpperCase()] || word)
  process.stdout.write(ph)
}

function onReadSep (sep) {
  process.stdout.write(sep)
}

let BUFF = ''
let inWord = false
export function onData (buff) {
  const content = buff.toString('utf-8')
  for (let i = 0; i < content.length; i++) {
    if (content[i].match(/[A-Za-z']/)) { // word
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
}

// flush last line
export function onEnd () {
  if (BUFF.length > 0) {
    if (inWord) {
      onReadWord(BUFF)
      BUFF = ''
    } else {
      onReadSep(BUFF)
      BUFF = ''
    }
  }
}
