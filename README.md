
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AA /ɑ/~/ɒ/ | a | PALM, START, car | PÁLM, STÁRT, cár | long vowel |
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass | TRÁHP, BÁHTH, cáht, fáhst, páhs | short vowel |
| EY /eɪ/ | ai | FACE, say, stain, freight | FÁYS, sáy, stáyn, fráyt | diphthong vowel |
| B /b/ | b | baboon | bubóon | stop |
| K /k/ | c | cat | cáht | stop |
| CH /tʃ/ | ch | cheetah | chéetu | áhfrucut  |
| D /d/ | d | deer | dír | stop |
| DH /ð/ | dh | this | dhís | fricative |
| EH /ɛ/ | e | DRESS, bread, many, friend | DRÉS, bréd, ménee, frénd | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police | FLÉES, sée, péepul, pulées  |
| ER /ɝ/ | er | urchin | érchun | |
| F /f/ | f | flamingo | flumínggow | fricative |
| G /ɡ/ | g | gazelle | guzél | stop |
| HH /h/ | h | hippopotamus | hipupátumus | aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women | CÍT, míth, prítee, wímun | short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height | PRÍYS, tríy, níyt, híyt | vowel |
| JH /dʒ/ | j | jackal | jáhcul | affricate |
| L /l/ | l | lion | líyun | liquid |
| M /m/ | m | monkey | múngcee | nasal |
| N /n/ | n | gnat | náht | nasal |
| NG /ŋ/ | ng | anchor | áhngcer | nasal |
| AO /ɔ/ | o | THOUGHT, NORTH, water, four | THÓT, NÓRTH, wóter, fór | long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHÓIS, nóiz, lóiter, bói | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna | GÓOS, nóo, dóo, tóonu | long vowel |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower | MÓUTH, nóun, cóu, shóuer | diphthong vowel |
| OW /oʊ/ | ow | GOAT, slow, toe | GÓWT, slów, tów | diphthong vowel |
| P /p/ | p | penguin | pénggwun | stop |
| R /ɹ/ | r | rhinoceros | riynáserus | liquid |
| S /s/ | s | sloth | slówth | fricative |
| ZH /ʒ/ | si | genre | siánru | fricative |
| SH /ʃ/ | sh | sheep | shéep | fricative |
| T /t/ | t | tiger | tíyger | stop |
| TH /θ/ | th | thrush | thrúsh | fricative |
| AH /ʌ/ | u | STRUT, son, blood | STRÚT, sún, blúd | short vowel |
| UH /ʊ/ | uh | FOOT, took, good, put | FÚHT, túhc, gúhd, púht | short vowel |
| V /v/ | v | vulture | vúlcher | fricative |
| W /w/ | w | walrus | wólrus | semi-vowel |
| HH W | wh | wheat | whéet |
| Y /j/ | y | yak | yáhc | semi-vowel |
| Z /z/ | z | zebra | zéebru | fricative |
 
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

