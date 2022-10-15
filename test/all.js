import { convertWord } from '../phonate.js'
// import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"

import test from 'ava'

const split = s => s.split(', ')

const table = {
  AE: ['TRAP, BATH, cat, fast, pass, as, that, at, has, an', 'TRÁP, BÁTH, kát, fást, pás, áz, thát, át, ház, án'],
  AA: ['PALM, START, car, was, are', 'PÁAM, STÁART, káar, wáaz, áar'],
  AO: ['THOUGHT, NORTH, water, four, also, all', 'THÁWT, NÁWRTH, wáwter, fáwr, áwlsoe, áwl'],
  EY: ['FACE, say, stain, freight, they, became', 'FÁYS, sáy, stáyn, fráyt, tháy, bikáym'],
  B: ['baboon', 'bobóon'],
  CH: ['cheetah, century', 'chéeto, séncheree'],
  D: ['deer', 'dír'],
  EH: ['DRESS, bread, many, friend, their', 'DRÉS, bréd, ménee, frénd, thér'],
  IY: ['FLEECE, sea, people, police, he', 'FLÉES, sée, péepol, polées, hée'],
  ER: ['urchin, first', 'érchon, férst'],
  F: ['flamingo', 'flomínggoe'],
  G: ['gazelle', 'gozél'],
  HH: ['hippopotamus', 'hipopáatomos'],
  IH: ['KIT, myth, pretty, women, is, his, career', 'KÍT, míth, prítee, wímon, íz, híz, kerír'],
  AY: ['PRICE, try, night, height, by, time', 'PRÍYS, tríy, níyt, híyt, bíy, tíym', 'vowel'],
  JH: ['jackal, college', 'jákol, káalij'],
  K: ['cat', 'kát'],
  L: ['lion', 'líyon'],
  M: ['monkey', 'móngkee'],
  N: ['gnat', 'nát'],
  NG: ['anchor, long, among, doing', 'ángker, láwng, omóng, dóoing'],
  AH: ['STRUT, son, blood, the, of, and, a, one, from', 'STRÓT, són, blód, tho, óv, ánd, o, wón, fróm'],
  OW: ['GOAT, slow, toe, also, only', 'GÓET, slóe, tóe, áwlsoe, óenlee'],
  OY: ['CHOICE, noise, loiter, boy', 'CHÓIS, nóiz, lóiter, bói'],
  UW: ['GOOSE, new, due, tuna, to, use', 'GÓOS, nóo, dóo, tóono, to, yóos'],
  AW: ['MOUTH, noun, cow, shower', 'MÓUTH, nóun, kóu, shóuer'],
  P: ['penguin', 'pénggwon'],
  R: ['rhinoceros', 'riynáaseros'],
  S: ['sloth, century', 'slóeth, séncheree'],
  SH: ['sheep', 'shéep'],
  ZH: ['genre, adhesion, allusion, asia, casual, decision', 'siáanro, adhéesion, olóosion, áysio, kásiowol, disísion'],
  T: ['tiger', 'tíyger'],
  DH: ['this, the, that', 'thís, tho, thát'],
  TH: ['thrush', 'thrósh'],
  UH: ['FOOT, took, good, put, would', 'FÚHT, túhk, gúhd, púht, wúhd'],
  V: ['vulture, of', 'vólcher, óv'],
  W: ['walrus', 'wáwlros'],
  'HH W': ['wheat', 'whéet'],
  Y: ['yak', 'yák'],
  Z: ['zebra, as, was, is', 'zéebro, áz, wáaz, íz, híz']
}

for (const phoneme in table) {
  test(phoneme, t => {
    const [wordString, wérdStríng] = table[phoneme]
    const words = split(wordString)
    const wérdz = split(wérdStríng)

    const n = words.length
    for (let i = 0; i < n; ++i) {
      t.is(convertWord(words[i]), wérdz[i], `${phoneme} #${i}`)
    }
  })
}

/*

*/
