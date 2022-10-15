
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | a | TRAP, BATH, cat, fast, pass, as, that, at, has, an | TRAP, BATH, kat, fast, pas, az, that, at, haz, an | short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car, was, are | PAAM, STAART, kaar, waaz, aar | long vowel |
| AO /ɔ/ | aw | THOUGHT, NORTH, water, four, also, all | THAWT, NAWRTH, wawter, fawr, awlsoe, awl | long vowel |
| EY /eɪ/ | ay | FACE, say, stain, freight, they, became | FAYS, say, stayn, frayt, thay, bikaym | diphthong vowel |
| B /b/ | b | baboon | boboon | stop |
| CH /tʃ/ | ch | cheetah, century | cheeto, sencheree | afrokot  |
| D /d/ | d | deer | dir | stop |
| EH /ɛ/ | e | DRESS, bread, many, friend, their | DRES, bred, menee, frend, ther | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police, he | FLEES, see, peepol, polees, hee  |
| ER /ɝ/ | er | urchin, first | erchon, ferst | |
| F /f/ | f | flamingo | flominggoe | fricative |
| G /ɡ/ | g | gazelle | gozel | stop |
| HH /h/ | h | hippopotamus | hipopaatomos | aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women, is, his, career | KIT, mith, pritee, wimon, iz, hiz, kerir | short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height, by, time | PRIYS, triy, niyt, hiyt, biy, tiym | vowel |
| JH /dʒ/ | j | jackal, college | jakol, kaalij | affricate |
| K /k/ | k | cat | kat | stop |
| L /l/ | l | lion | liyon | liquid |
| M /m/ | m | monkey | mongkee | nasal |
| N /n/ | n | gnat | nat | nasal |
| NG /ŋ/ | ng | anchor, long, among, doing | angker, lawng, omong, dooing | nasal |
| AH /ʌ/ | o | STRUT, son, blood, the, of, a, one, from | STROT, son, blod, tho, ov, o, won, from | short vowel |
| OW /oʊ/ | oe | GOAT, slow, toe, also, only | GOET, sloe, toe, awlsoe, oenlee | diphthong vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHOIS, noiz, loiter, boi | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna, to, use | GOOS, noo, doo, toono, to, yoos | long vowel |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower | MOUTH, noun, kou, shouer | diphthong vowel |
| P /p/ | p | penguin | penggwon | stop |
| R /ɹ/ | r | rhinoceros | riynaaseros | liquid |
| S /s/ | s | sloth, century | sloeth, sencheree | fricative |
| SH /ʃ/ | sh | sheep | sheep | fricative |
| ZH /ʒ/ | si | genre, adhesion, allusion, asia, casual, decision | siaanro, adheesion, oloosion, aysio, kasiowol, disision | fricative |
| T /t/ | t | tiger | tiyger | stop |
| DH /ð/ | th | this, the, that | this, tho, that | fricative |
| TH /θ/ | th | thrush | throsh | fricative |
| UH /ʊ/ | uh | FOOT, took, good, put, would | FUHT, tuhk, guhd, puht, wuhd | short vowel |
| V /v/ | v | vulture, of | volcher, ov | fricative |
| W /w/ | w | walrus | wawlros | semi-vowel |
| HH W | wh | wheat | wheet |
| Y /j/ | y | yak | yak | semi-vowel |
| Z /z/ | z | zebra, as, was, is | zeebro, az, waaz, iz, hiz | fricative |
 
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

