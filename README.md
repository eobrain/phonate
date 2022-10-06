
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AA /ɑ/~/ɒ/ | a | PALM, START, car, was, are | PÁLM, STÁRT, kár, wáz, ár | long vowel |
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass, as, that, at, has, an | TRÁHP, BÁHTH, káht, fáhst, páhs, áhz, tháht, áht, háhz, áhn | short vowel |
| AO /ɔ/ | aw | THOUGHT, NORTH, water, four, also, all | THÁWT, NÁWRTH, wáwter, fáwr, áwlsoe, áwl | long vowel |
| EY /eɪ/ | ay | FACE, say, stain, freight, they, became | FÁYS, sáy, stáyn, fráyt, bikáym | diphthong vowel |
| B /b/ | b | baboon | bebóon | stop |
| CH /tʃ/ | ch | cheetah, century | chéete, séhncheree | áhfreket  |
| D /d/ | d | deer | dír | stop |
| AH /ʌ/ | e | STRUT, son, blood, the, of, and, a, one, from | STRÉT, sén, bléd, the, év, end, e, wén, frém | short vowel |
| EH /ɛ/ | eh | DRESS, bread, many, friend, their | DRÉHS, bréhd, méhnee, fréhnd, théhr | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police, he | FLÉES, sée, péepel, pelées, hée  |
| ER /ɝ/ | er | urchin, first | érchen, férst | |
| F /f/ | f | flamingo | flemínggoe | fricative |
| G /ɡ/ | g | gazelle | gezéhl | stop |
| HH /h/ | h | hippopotamus | hipepátemes | aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women, is, his, career | KÍT, míth, prítee, wímen, íz, híz, kerír | short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height, by, time | PRÍYS, tríy, níyt, híyt, bíy, tíym | vowel |
| JH /dʒ/ | j | jackal, college | jáhkel, kálij | affricate |
| K /k/ | k | cat | káht | stop |
| L /l/ | l | lion | líyen | liquid |
| M /m/ | m | monkey | méngkee | nasal |
| N /n/ | n | gnat | náht | nasal |
| NG /ŋ/ | ng | anchor, long, among, doing | áhngker, láwng, eméng, dóoing | nasal |
| OW /oʊ/ | oe | GOAT, slow, toe, also, only | GÓET, slóe, tóe, áwlsoe, óenlee | diphthong vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHÓIS, nóiz, lóiter, bói | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna, to, use | GÓOS, nóo, dóo, tóone, tóo, yóos | long vowel |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower | MÓUTH, nóun, kóu, shóuer | diphthong vowel |
| P /p/ | p | penguin | péhnggwen | stop |
| R /ɹ/ | r | rhinoceros | riynáseres | liquid |
| S /s/ | s | sloth, century | slóeth, séhncheree | fricative |
| SH /ʃ/ | sh | sheep | shéep | fricative |
| ZH /ʒ/ | si | genre, adhesion, allusion, asia, casual, decision | siánre, ahdhéesien, elóosien, áysie, káhsiewel, disísien | fricative |
| T /t/ | t | tiger | tíyger | stop |
| DH /ð/ | th | this, the, that | thís, the, tháht | fricative |
| TH /θ/ | th | thrush | thrésh | fricative |
| UH /ʊ/ | uh | FOOT, took, good, put, would | FÚHT, túhk, gúhd, púht, wúhd | short vowel |
| V /v/ | v | vulture, of | vélcher, év | fricative |
| W /w/ | w | walrus | wáwlres | semi-vowel |
| HH W | wh | wheat | whéet |
| Y /j/ | y | yak | yáhk | semi-vowel |
| Z /z/ | z | zebra, as, was, is | zéebre, áhz, wáz, íz, híz | fricative |
 
## Using the library

In a JavaScript module loaded from a web page use 
```js
import { convert } from 'https://cdn.jsdelivr.net/npm/phonate/phonate.js'
```
 
In a NodeJS JavaScript module use 
```js
import {convert} from "phonate"
```
 
## Running the Software

Generate phonetic dictionary.

To execute

1. `cd` to the directory containing this README.md file.
1. Install [node][1] (for example by installing [nvm][2] and executing `nvm use` )
2. Install dependencies
   ```sh
   npm install
   ```
3. In this directory execute
   ```sh
   npx bajel
   ```
4.  This will generate a file called  `phonetic.js`  with a mapping frem standard Inglish spelling tp phonetic spelling. It then runs an evaluation to see how close the two spellings are to each other, measured by Levenshtein distance weighted by how often the word occurs in English.


Uses [The CMU Pronouncing Dictionary][3].
 
[1]: https://nodejs.org/en/
[2]: https://github.com/nvm-sh/nvm
[3]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict

