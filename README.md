
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AA /ɑ/~/ɒ/ | a | PALM, START, car, was, are | PÁLM, STÁRT, cár, wáz, ár | long vowel |
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass, as, that, at, has, an | TRÁHP, BÁHTH, cáht, fáhst, páhs, áhz, dháht, áht, háhz, áhn | short vowel |
| EY /eɪ/ | ay | FACE, say, stain, freight, they, became | FÁYS, sáy, stáyn, fráyt, bicáym | diphthong vowel |
| B /b/ | b | baboon | bubóon | stop |
| K /k/ | c | cat | cáht | stop |
| CH /tʃ/ | ch | cheetah, century | chéetu, séncheree | áhfrucut  |
| D /d/ | d | deer | dír | stop |
| DH /ð/ | dh | this, the, that | dhís, dhu, dháht | fricative |
| EH /ɛ/ | e | DRESS, bread, many, friend, their | DRÉS, bréd, ménee, frénd, dhér | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police, he | FLÉES, sée, péepul, pulées, hée  |
| ER /ɝ/ | er | urchin, first | érchun, férst | |
| F /f/ | f | flamingo | flumínggow | fricative |
| G /ɡ/ | g | gazelle | guzél | stop |
| HH /h/ | h | hippopotamus | hipupátumus | aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women, is, his, career | CÍT, míth, prítee, wímun, íz, híz, cerír | short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height, by, time | PRÍYS, tríy, níyt, híyt, bíy, tíym | vowel |
| JH /dʒ/ | j | jackal, college | jáhcul, cálij | affricate |
| L /l/ | l | lion | líyun | liquid |
| M /m/ | m | monkey | múngcee | nasal |
| N /n/ | n | gnat | náht | nasal |
| NG /ŋ/ | ng | anchor, long, among, doing | áhngcer, lóng, umúng, dóoing | nasal |
| AO /ɔ/ | o | THOUGHT, NORTH, water, four, also, all | THÓT, NÓRTH, wóter, fór, ólsow, ól | long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHÓIS, nóiz, lóiter, bói | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna, to, use | GÓOS, nóo, dóo, tóonu, tóo, yóos | long vowel |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower | MÓUTH, nóun, cóu, shóuer | diphthong vowel |
| OW /oʊ/ | ow | GOAT, slow, toe, also, only | GÓWT, slów, tów, ólsow, ównlee | diphthong vowel |
| P /p/ | p | penguin | pénggwun | stop |
| R /ɹ/ | r | rhinoceros | riynáserus | liquid |
| S /s/ | s | sloth, century | slówth, séncheree | fricative |
| SH /ʃ/ | sh | sheep | shéep | fricative |
| ZH /ʒ/ | si | genre, adhesion, allusion, asia, casual, decision | siánru, ahdhéesiun, ulóosiun, áysiu, cáhsiuwul, disísiun | fricative |
| T /t/ | t | tiger | tíyger | stop |
| TH /θ/ | th | thrush | thrúsh | fricative |
| AH /ʌ/ | u | STRUT, son, blood, the, of, and, a, one, from | STRÚT, sún, blúd, dhu, úv, und, u, wún, frúm | short vowel |
| UH /ʊ/ | uh | FOOT, took, good, put, would | FÚHT, túhc, gúhd, púht, wúhd | short vowel |
| V /v/ | v | vulture, of | vúlcher, úv | fricative |
| W /w/ | w | walrus | wólrus | semi-vowel |
| HH W | wh | wheat | whéet |
| Y /j/ | y | yak | yáhc | semi-vowel |
| Z /z/ | z | zebra, as, was, is | zéebru, áhz, wáz, íz, híz | fricative |
 
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

