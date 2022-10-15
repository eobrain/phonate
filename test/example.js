import { convert, convertWord } from '../phonate.js'
// import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"

import test from 'ava'

test('basic', t => {
  t.is(convert('spell English'), 'spel Inglish')
})

test('case', t => {
  t.is(convert('spell'), 'spel')
  t.is(convert('Spell'), 'Spel')
  t.is(convert('SPELL'), 'SPEL')
  t.is(convert('speLL'), 'speL')
})

test('convertWord', t => {
  t.is(convertWord('in'), 'in')
})

test('not a word', t => {
  t.is(convert('thisIsNotAWord'), 'thisIsNotAWord')
})
