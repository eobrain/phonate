import { convert, convertWord } from '../phonate.js'
// import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"

import test from 'ava'

test('basic', t => {
  t.is(convert('spell English'), 'sp-eh-l Ih-nglihsh')
})

test('case', t => {
  t.is(convert('spell'), 'sp-eh-l')
  t.is(convert('Spell'), 'Sp-eh-l')
  t.is(convert('SPELL'), 'SP-EH-L')
  t.is(convert('speLL'), 'sp-EH-L')
})

test('convertWord', t => {
  t.is(convertWord('in'), 'ihn')
})

test('not a word', t => {
  t.is(convert('thisIsNotAWord'), 'thisIsNotAWord')
})
