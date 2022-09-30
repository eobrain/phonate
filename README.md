
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass | TRÁHP, BÁHTH, cáht, fáhst, páhs | short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car | PÁALM, STÁART, cáar | long vowel |
| B /b/ | b | baboon | bubóon | stop |
| K /k/ | c | cat | cáht | stop |
| CH /tʃ/ | ch | cheetah | chéetu | áhfrucut  |
| D /d/ | d | deer | díhr | stop |
| AH /ʌ/ | u | STRUT, son, blood | STRÚT, sún, blúd | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police | FLÉES, sée, péepul, pulées  |
| EH /ɛ/ | eh | DRESS, bread, many, friend | DRÉHS, bréhd, méhnee, fréhnd | short vowel |
| AY /aɪ/ | ei | PRICE, try, night, height | PRÉIS, tréi, néit, héit | vowel |
| EY /eɪ/ | ey | FACE, say, stain, freight | FÉYS, séy, stéyn, fréyt | diphthong vowel |
| ER /ɝ/ | er | urchin | érchun | |
| F /f/ | f | flamingo | flumíhnggow | fricative |
| G /ɡ/ | g | gazelle | guzéhl | stop |
| HH /h/ | h | hippopotamus | hìhpupáatumus | aspirate |
| IH /ɪ/ | ih | KIT, myth, pretty, women | CÍHT, míhth, príhtee, wíhmun | short vowel |
| JH /dʒ/ | j | jackal | jáhcul | affricate |
| L /l/ | l | lion | léiun | liquid |
| M /m/ | m | monkey | múngcee | nasal |
| N /n/ | n | gnat | náht | nasal |
| NG /ŋ/ | ng | anchor | áhngcer | nasal |
| AO /ɔ/ | ou | THOUGHT, NORTH, water, four | THÓUT, NÓURTH, wóuter, fóur | long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHÓIS, nóiz, lóiter, bói | diphthong vowel |
| OW /oʊ/ | oh | GOAT, slow, toe | GÓWT, slów, tów | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna | GÓOS, nóo, dóo, tóonu | long vowel |
| AW /aʊ/ | ow | MOUTH, noun, cow, shower | MÓUTH, nóun, cóu, shóuer | diphthong vowel |
| UH /ʊ/ | uh | FOOT, took, good, put | FÚHT, túhc, gúhd, púht | short vowel |
| P /p/ | p | penguin | péhnggwun | stop |
| R /ɹ/ | r | rhinoceros | reináaserus | liquid |
| S /s/ | s | sloth | slówth | fricative |
| ZH /ʒ/ | zh | genre | zháanru | fricative |
| Z /z/ | z | zebra | zéebru | fricative |
| SH /ʃ/ | sh | sheep | shéep | fricative |
| T /t/ | t | tiger | téiger | stop |
| DH /ð/ | th | this | thihs | fricative |
| TH /θ/ | th | thrush | thrúsh | fricative |
| V /v/ | v | vulture | vúlcher | fricative |
| W /w/ | w | walrus | wóulrus | semi-vowel |
| HH W | wh | wheat | wéet |
| Y /j/ | y | yak | yáhc | semi-vowel |
 
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

