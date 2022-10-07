import { convert, convertWord } from '../phonate.js'
// import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"

import test from 'ava'

test('basic', t => {
  t.is(convert('spell English'), 'spél Ínglish')
})

test('case', t => {
  t.is(convert('spell'), 'spél')
  t.is(convert('Spell'), 'Spél')
  t.is(convert('SPELL'), 'SPÉL')
  t.is(convert('speLL'), 'spéL')
})

test('convertWord', t => {
  t.is(convertWord('in'), 'in')
})

test('not a word', t => {
  t.is(convert('thisIsNotAWord'), 'thisIsNotAWord')
})
