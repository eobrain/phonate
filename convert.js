import { onData, onEnd } from './site/phonate.js'

process.stdin.on('data', onData)

// flush last line
process.stdin.on('end', onEnd)
