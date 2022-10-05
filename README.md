
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass | TR-AH-P, B-AH-TH, c-ah-t, f-ah-st, p-ah-s | short vowel |
| AA /ɑ/~/ɒ/ | o | PALM, START, car | P-A-M, ST-A-RT, c-a-r | long vowel |
| B /b/ | b | baboon | bub-oo-n | stop |
| K /k/ | c | cat | c-ah-t | stop |
| CH /tʃ/ | ch | cheetah | ch-ee-tu | ah-frucut  |
| D /d/ | d | deer | d-i-r | stop |
| AH /ʌ/ | u | STRUT, son, blood | STR-U-T, s-u-n, bl-u-d | short vowel |
| IY /i/ | ee | FLEECE, sea, people, police | FL-EE-S, s-ee, p-ee-pul, pul-ee-s  |
| EH /ɛ/ | e | DRESS, bread, many, friend | DR-E-S, br-e-d, m-e-nee, fr-e-nd | short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height | PR-IY-S, tr-iy, n-iy-t, h-iy-t | vowel |
| EY /eɪ/ | ai | FACE, say, stain, freight | F-AI-S, s-ai, st-ai-n, fr-ai-t | diphthong vowel |
| ER /ɝ/ | er | urchin | er-chun | |
| F /f/ | f | flamingo | flum-i-nggow | fricative |
| G /ɡ/ | g | gazelle | guz-e-l | stop |
| HH /h/ | h | hippopotamus | hipup-a-tumus | aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women | C-I-T, m-i-th, pr-i-tee, w-i-mun | short vowel |
| JH /dʒ/ | j | jackal | j-ah-cul | affricate |
| L /l/ | l | lion | l-iy-un | liquid |
| M /m/ | m | monkey | m-u-ngcee | nasal |
| N /n/ | n | gnat | n-ah-t | nasal |
| NG /ŋ/ | ng | anchor | ah-ngcer | nasal |
| AO /ɔ/ | ou | THOUGHT, NORTH, water, four | TH-OU-T, N-OU-RTH, w-ou-ter, f-ou-r | long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CH-OI-S, n-oi-z, l-oi-ter, b-oi | diphthong vowel |
| OW /oʊ/ | ow | GOAT, slow, toe | G-OW-T, sl-ow, t-ow | diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna | G-OO-S, n-oo, d-oo, t-oo-nu | long vowel |
| AW /aʊ/ | ow | MOUTH, noun, cow, shower | M-OU-TH, n-ou-n, c-ou, sh-ou-er | diphthong vowel |
| UH /ʊ/ | uh | FOOT, took, good, put | F-UH-T, t-uh-c, gid, p-uh-t | short vowel |
| P /p/ | p | penguin | p-e-nggwun | stop |
| R /ɹ/ | r | rhinoceros | riyn-a-serus | liquid |
| S /s/ | s | sloth | sl-ow-th | fricative |
| ZH /ʒ/ | si | genre | si-a-nru | fricative |
| Z /z/ | z | zebra | z-ee-bru | fricative |
| SH /ʃ/ | sh | sheep | sh-ee-p | fricative |
| T /t/ | t | tiger | t-iy-ger | stop |
| DH /ð/ | th | this | this | fricative |
| TH /θ/ | th | thrush | thr-u-sh | fricative |
| V /v/ | v | vulture | v-u-lcher | fricative |
| W /w/ | w | walrus | w-ou-lrus | semi-vowel |
| HH W | wh | wheat | w-ee-t |
| Y /j/ | y | yak | y-ah-c | semi-vowel |
 
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

