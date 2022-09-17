import { onData, onEnd } from './phonate.js'

process.stdin.on('data', onData)

// flush last line
process.stdin.on('end', onEnd)
