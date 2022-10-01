
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass | TRA̲H̲P, BA̲H̲TH, ca̲h̲t, fa̲h̲st, pa̲h̲s | short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car | PA̲A̲M, STA̲A̲RT, ca̲a̲r | long vowel |
| B /b/ | b | baboon | bubo̲o̲n | stop |
| K /k/ | c | cat | ca̲h̲t | stop |
| CH /tʃ/ | ch | cheetah | che̲e̲tu | a̲h̲frucut  |
| D /d/ | d | deer | di̲h̲r | stop |
| AH /ʌ/ | u | STRUT, son, blood | STRU̲T, su̲n, blu̲d | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police | FLE̲E̲S, se̲e̲, pe̲e̲pul, pule̲e̲s  |
| EH /ɛ/ | eh | DRESS, bread, many, friend | DRE̲H̲S, bre̲h̲d, me̲h̲nee, fre̲h̲nd | short vowel |
| AY /aɪ/ | ei | PRICE, try, night, height | PRE̲I̲S, tre̲i̲, ne̲i̲t, he̲i̲t | vowel |
| EY /eɪ/ | ey | FACE, say, stain, freight | FE̲Y̲S, se̲y̲, ste̲y̲n, fre̲y̲t | diphthong vowel |
| ER /ɝ/ | er | urchin | e̲r̲chun | |
| F /f/ | f | flamingo | flumi̲h̲nggow | fricative |
| G /ɡ/ | g | gazelle | guze̲h̲l | stop |
| HH /h/ | h | hippopotamus | hihpupa̲a̲tumus | aspirate |
| IH /ɪ/ | ih | KIT, myth, pretty, women | CI̲H̲T, mi̲h̲th, pri̲h̲tee, wi̲h̲mun | short vowel |
| JH /dʒ/ | j | jackal | ja̲h̲cul | affricate |
| L /l/ | l | lion | le̲i̲un | liquid |
| M /m/ | m | monkey | mu̲ngcee | nasal |
| N /n/ | n | gnat | na̲h̲t | nasal |
| NG /ŋ/ | ng | anchor | a̲h̲ngcer | nasal |
| AO /ɔ/ | ou | THOUGHT, NORTH, water, four | THO̲U̲T, NO̲U̲RTH, wo̲u̲ter, fo̲u̲r | long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHO̲I̲S, no̲i̲z, lo̲i̲ter, bo̲i̲ | diphthong vowel |
| OW /oʊ/ | oh | GOAT, slow, toe | GO̲W̲T, slo̲w̲, to̲w̲ | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna | GO̲O̲S, no̲o̲, do̲o̲, to̲o̲nu | long vowel |
| AW /aʊ/ | ow | MOUTH, noun, cow, shower | MO̲U̲TH, no̲u̲n, co̲u̲, sho̲u̲er | diphthong vowel |
| UH /ʊ/ | uh | FOOT, took, good, put | FU̲H̲T, tu̲h̲c, gihd, pu̲h̲t | short vowel |
| P /p/ | p | penguin | pe̲h̲nggwun | stop |
| R /ɹ/ | r | rhinoceros | reina̲a̲serus | liquid |
| S /s/ | s | sloth | slo̲w̲th | fricative |
| ZH /ʒ/ | zh | genre | zha̲a̲nru | fricative |
| Z /z/ | z | zebra | ze̲e̲bru | fricative |
| SH /ʃ/ | sh | sheep | she̲e̲p | fricative |
| T /t/ | t | tiger | te̲i̲ger | stop |
| DH /ð/ | th | this | thihs | fricative |
| TH /θ/ | th | thrush | thru̲sh | fricative |
| V /v/ | v | vulture | vu̲lcher | fricative |
| W /w/ | w | walrus | wo̲u̲lrus | semi-vowel |
| HH W | wh | wheat | we̲e̲t |
| Y /j/ | y | yak | ya̲h̲c | semi-vowel |
 
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

