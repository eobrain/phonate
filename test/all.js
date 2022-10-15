import { convertWord } from '../phonate.js'
// import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"

import test from 'ava'

const split = s => s.split(', ')

const table = {
  AE: ['TRAP, BATH, cat, fast, pass, as, that, at, has, an', 'TRAP, BATH, kat, fast, pas, az, that, at, haz, an'],
  AA: ['PALM, START, car, was, are', 'PAAM, STAART, kaar, waaz, aar'],
  AO: ['THOUGHT, NORTH, water, four, also, all', 'THAWT, NAWRTH, wawter, fawr, awlsoe, awl'],
  EY: ['FACE, say, stain, freight, they, became', 'FAYS, say, stayn, frayt, thay, bikaym'],
  B: ['baboon', 'buboon'],
  CH: ['cheetah, century', 'cheetu, sencheree'],
  D: ['deer', 'dir'],
  EH: ['DRESS, bread, many, friend, their', 'DRES, bred, menee, frend, ther'],
  IY: ['FLEECE, sea, people, police, he', 'FLEES, see, peepul, pulees, hee'],
  ER: ['urchin, first', 'erchun, ferst'],
  F: ['flamingo', 'fluminggoe'],
  G: ['gazelle', 'guzel'],
  HH: ['hippopotamus', 'hipupaatumus'],
  IH: ['KIT, myth, pretty, women, is, his, career', 'KIT, mith, pritee, wimun, iz, hiz, kerir'],
  AY: ['PRICE, try, night, height, by, time', 'PRIYS, triy, niyt, hiyt, biy, tiym', 'vowel'],
  JH: ['jackal, college', 'jakul, kaalij'],
  K: ['cat', 'kat'],
  L: ['lion', 'liyun'],
  M: ['monkey', 'mungkee'],
  N: ['gnat', 'nat'],
  NG: ['anchor, long, among, doing', 'angker, lawng, umung, dooing'],
  AH: ['STRUT, son, blood, the, of, and, a, one, from', 'STRUT, sun, blud, thu, uv, and, u, wun, frum'],
  OW: ['GOAT, slow, toe, also, only', 'GOET, sloe, toe, awlsoe, oenlee'],
  OY: ['CHOICE, noise, loiter, boy', 'CHOIS, noiz, loiter, boi'],
  UW: ['GOOSE, new, due, tuna, to, use', 'GOOS, noo, doo, toonu, too, yoos'],
  AW: ['MOUTH, noun, cow, shower', 'MOUTH, noun, kou, shouer'],
  P: ['penguin', 'penggwun'],
  R: ['rhinoceros', 'riynaaserus'],
  S: ['sloth, century', 'sloeth, sencheree'],
  SH: ['sheep', 'sheep'],
  ZH: ['genre, adhesion, allusion, asia, casual, decision', 'siaanru, adheesiun, uloosiun, aysiu, kasiuwul, disisiun'],
  T: ['tiger', 'tiyger'],
  DH: ['this, the, that', 'this, thu, that'],
  TH: ['thrush', 'thrush'],
  UH: ['FOOT, took, good, put, would', 'FUHT, tuhk, guhd, puht, wuhd'],
  V: ['vulture, of', 'vulcher, uv'],
  W: ['walrus', 'wawlrus'],
  'HH W': ['wheat', 'wheet'],
  Y: ['yak', 'yak'],
  Z: ['zebra, as, was, is', 'zeebru, az, waaz, iz, hiz']
}

for (const phoneme in table) {
  test(phoneme, t => {
    const [wordString, werdString] = table[phoneme]
    const words = split(wordString)
    const werdz = split(werdString)

    const n = words.length
    for (let i = 0; i < n; ++i) {
      t.is(convertWord(words[i]), werdz[i], `${phoneme} #${i}`)
    }
  })
}

/*

*/
