import { convertWord } from '../phonate.js'
// import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"

import test from 'ava'

const split = s => s.split(', ')

const table = {
  AE: ['TRAP, BATH, cat, fast, pass, as, that, at, has, an', 'TRAP, BATH, kat, fast, pas, az, that, at, haz, an'],
  AA: ['PALM, START, car, was, are', 'PAAM, STAART, kaar, waaz, aar'],
  AO: ['THOUGHT, NORTH, water, four, also, all', 'THAWT, NAWRTH, wawter, fawr, awlsoe, awl'],
  EY: ['FACE, say, stain, freight, they, became', 'FAYS, say, stayn, frayt, thay, bikaym'],
  B: ['baboon', 'boboon'],
  CH: ['cheetah, century', 'cheeto, sencheree'],
  D: ['deer', 'dir'],
  EH: ['DRESS, bread, many, friend, their', 'DRES, bred, menee, frend, ther'],
  IY: ['FLEECE, sea, people, police, he', 'FLEES, see, peepol, polees, hee'],
  ER: ['urchin, first', 'erchon, ferst'],
  F: ['flamingo', 'flominggoe'],
  G: ['gazelle', 'gozel'],
  HH: ['hippopotamus', 'hipopaatomos'],
  IH: ['KIT, myth, pretty, women, is, his, career', 'KIT, mith, pritee, wimon, iz, hiz, kerir'],
  AY: ['PRICE, try, night, height, by, time', 'PRIYS, triy, niyt, hiyt, biy, tiym', 'vowel'],
  JH: ['jackal, college', 'jakol, kaalij'],
  K: ['cat', 'kat'],
  L: ['lion', 'liyon'],
  M: ['monkey', 'mongkee'],
  N: ['gnat', 'nat'],
  NG: ['anchor, long, among, doing', 'angker, lawng, omong, dooing'],
  AH: ['STRUT, son, blood, the, of, and, a, one, from', 'STROT, son, blod, tho, ov, and, o, won, from'],
  OW: ['GOAT, slow, toe, also, only', 'GOET, sloe, toe, awlsoe, oenlee'],
  OY: ['CHOICE, noise, loiter, boy', 'CHOIS, noiz, loiter, boi'],
  UW: ['GOOSE, new, due, tuna, to, use', 'GOOS, noo, doo, toono, to, yoos'],
  AW: ['MOUTH, noun, cow, shower', 'MOUTH, noun, kou, shouer'],
  P: ['penguin', 'penggwon'],
  R: ['rhinoceros', 'riynaaseros'],
  S: ['sloth, century', 'sloeth, sencheree'],
  SH: ['sheep', 'sheep'],
  ZH: ['genre, adhesion, allusion, asia, casual, decision', 'siaanro, adheesion, oloosion, aysio, kasiowol, disision'],
  T: ['tiger', 'tiyger'],
  DH: ['this, the, that', 'this, tho, that'],
  TH: ['thrush', 'throsh'],
  UH: ['FOOT, took, good, put, would', 'FUHT, tuhk, guhd, puht, wuhd'],
  V: ['vulture, of', 'volcher, ov'],
  W: ['walrus', 'wawlros'],
  'HH W': ['wheat', 'wheet'],
  Y: ['yak', 'yak'],
  Z: ['zebra, as, was, is', 'zeebro, az, waaz, iz, hiz']
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
