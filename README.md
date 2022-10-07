
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | a | TRAP, BATH, cat, fast, pass, as, that, at, has, an | TRÁP, BÁTH, kát, fást, pás, áz, thát, át, ház, án | short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car, was, are | PÁAM, STÁART, káar, wáaz, áar | long vowel |
| AO /ɔ/ | aw | THOUGHT, NORTH, water, four, also, all | THÁWT, NÁWRTH, wáwter, fáwr, áwlsoe, áwl | long vowel |
| EY /eɪ/ | ay | FACE, say, stain, freight, they, became | FÁYS, sáy, stáyn, fráyt, bikáym | diphthong vowel |
| B /b/ | b | baboon | bobóon | stop |
| CH /tʃ/ | ch | cheetah, century | chéeto, séncheree | áfrokot  |
| D /d/ | d | deer | dír | stop |
| EH /ɛ/ | e | DRESS, bread, many, friend, their | DRÉS, bréd, ménee, frénd, thér | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police, he | FLÉES, sée, péepol, polées, hée  |
| ER /ɝ/ | er | urchin, first | érchon, férst | |
| F /f/ | f | flamingo | flomínggoe | fricative |
| G /ɡ/ | g | gazelle | gozél | stop |
| HH /h/ | h | hippopotamus | hipopáatomos | aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women, is, his, career | KÍT, míth, prítee, wímon, íz, híz, kerír | short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height, by, time | PRÍYS, tríy, níyt, híyt, bíy, tíym | vowel |
| JH /dʒ/ | j | jackal, college | jákol, káalij | affricate |
| K /k/ | k | cat | kát | stop |
| L /l/ | l | lion | líyon | liquid |
| M /m/ | m | monkey | móngkee | nasal |
| N /n/ | n | gnat | nát | nasal |
| NG /ŋ/ | ng | anchor, long, among, doing | ángker, láwng, omóng, dóoing | nasal |
| AH /ʌ/ | o | STRUT, son, blood, the, of, and, a, one, from | STRÓT, són, blód, tho, óv, ánd, o, wón, fróm | short vowel |
| OW /oʊ/ | oe | GOAT, slow, toe, also, only | GÓET, slóe, tóe, áwlsoe, óenlee | diphthong vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHÓIS, nóiz, lóiter, bói | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna, to, use | GÓOS, nóo, dóo, tóono, to, yóos | long vowel |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower | MÓUTH, nóun, kóu, shóuer | diphthong vowel |
| P /p/ | p | penguin | pénggwon | stop |
| R /ɹ/ | r | rhinoceros | riynáaseros | liquid |
| S /s/ | s | sloth, century | slóeth, séncheree | fricative |
| SH /ʃ/ | sh | sheep | shéep | fricative |
| ZH /ʒ/ | si | genre, adhesion, allusion, asia, casual, decision | siáanro, adhéesion, olóosion, áysio, kásiowol, disísion | fricative |
| T /t/ | t | tiger | tíyger | stop |
| DH /ð/ | th | this, the, that | thís, tho, thát | fricative |
| TH /θ/ | th | thrush | thrósh | fricative |
| UH /ʊ/ | uh | FOOT, took, good, put, would | FÚHT, túhk, gúhd, púht, wúhd | short vowel |
| V /v/ | v | vulture, of | vólcher, óv | fricative |
| W /w/ | w | walrus | wáwlros | semi-vowel |
| HH W | wh | wheat | whéet |
| Y /j/ | y | yak | yák | semi-vowel |
| Z /z/ | z | zebra, as, was, is | zéebro, áz, wáaz, íz, híz | fricative |
 
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

