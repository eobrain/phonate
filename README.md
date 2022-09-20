
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass | TRAHP, BAHTH, caht, fahst, pahs | short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car | PAAM, STAART, caar | long vowel |
| B /b/ | b | baboon | buboon | stop |
| K /k/ | c | cat | caht | stop |
| CH /tʃ/ | ch | cheetah | cheetu | ahfrucut  |
| D /d/ | d | deer | dihr | stop |
| AH /ʌ/ | u | STRUT, son, blood | STRUT, sun, blud | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police | FLEES, see, peepul, pulees  |
| EH /ɛ/ | eh | DRESS, bread, many, friend | DREHS, brehd, mehnee, frehnd | short vowel |
| AY /aɪ/ | ei | PRICE, try, night, height | PREIS, trei, neit, heit | vowel |
| EY /eɪ/ | ey | FACE, say, stain, freight | FEYS, sey, steyn, freyt | diphthong vowel |
| ER /ɝ/ | er | urchin | erchun | |
| F /f/ | f | flamingo | flumihnggow | fricative |
| G /ɡ/ | g | gazelle | guzehl | stop |
| HH /h/ | h | hippopotamus | hihpupaatumus | aspirate |
| IH /ɪ/ | ih | KIT, myth, pretty, women | CIHT, mihth, prihtee, wihmun | short vowel |
| JH /dʒ/ | j | jackal | jahcul | affricate |
| L /l/ | l | lion | leiun | liquid |
| M /m/ | m | monkey | mungcee | nasal |
| N /n/ | n | gnat | naht | nasal |
| NG /ŋ/ | ng | anchor | ahngcer | nasal |
| AO /ɔ/ | ou | THOUGHT, NORTH, water, four | THOUT, NOURTH, wouter, four | long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHOIS, noiz, loiter, boi | diphthong vowel |
| OW /oʊ/ | oh | GOAT, slow, toe | GOWT, slow, tow | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna | GOOS, noo, doo, toonu | long vowel |
| AW /aʊ/ | ow | MOUTH, noun, cow, shower | MOUTH, noun, cou, shouer | diphthong vowel |
| UH /ʊ/ | uh | FOOT, took, good, put | FUHT, tuhc, guhd, puht | short vowel |
| P /p/ | p | penguin | pehnggwun | stop |
| R /ɹ/ | r | rhinoceros | reinaaserus | liquid |
| S /s/ | s | sloth | slowth | fricative |
| ZH /ʒ/ | zh | genre | zhaanru | fricative |
| Z /z/ | z | zebra | zeebru | fricative |
| SH /ʃ/ | sh | sheep | sheep | fricative |
| T /t/ | t | tiger | teiger | stop |
| DH /ð/ | th | this | thihs | fricative |
| TH /θ/ | th | thrush | thrush | fricative |
| V /v/ | v | vulture | vulcher | fricative |
| W /w/ | w | walrus | woulrus | semi-vowel |
| HH W | wh | wheat | wheet |
| Y /j/ | y | yak | yahc | semi-vowel |
 
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

