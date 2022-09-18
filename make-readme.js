import { ph } from "./phonate.js";

console.log(
  ph`
# English

See `,`https://github.com/eobrain/spehl`,ph`
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|`,`
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass |`,ph`TRAP, BATH, cat, fast, pass | short vowel`,` |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car |`, ph`PALM, START, car | long vowel`,` |
| B /b/ | b | | |`, ph`stop`,` |
| K /k/ | c | | |`, ph`stop`,` |
| CH /tʃ/ | ch | | |`, ph`affricate`,` |
| D /d/ | d | | |`, ph`stop`,` |
| AH /ʌ/ | u | STRUT, son, blood |`, ph`STRUT, son, blood | short vowel`,` |
| IY /i/ | ee | FLEECE, sea, people, police |`, ph`FLEECE, sea, people, police`,` |
| EH /ɛ/ | eh | DRESS, bread, many, friend |`, ph`DRESS, bread, many, friend | short vowel`,` |
| AY /aɪ/ | ei | PRICE, try, night, height |`, ph`PRICE, try, night, height | vowel`,` |
| EY /eɪ/ | ey | FACE, say, stain, freight |`, ph`FACE, say, stain, freight | diphthong vowel`,` |
| ER /ɝ/ | er | | | vouol |
| F /f/ | f | | |`, ph`fricative`, `|
| G /ɡ/ | g | | |`, ph`stop`,` |
| HH /h/ | h | | | aspereyt |
| IH /ɪ/ | ih | KIT, myth, pretty, women |`, ph`KIT, myth, pretty, women | short vowel`,` |
| JH /dʒ/ | j | | |`, ph`affricate`,` |
| L /l/ | l | | |`, ph`liquid`,` |
| M /m/ | m | | |`, ph`nasal`,` |
| N /n/ | n | | |`, ph`nasal`,` |
| NG /ŋ/ | ng | | |`, ph`nasal`,` |
| AO /ɔ/ | ou | THOUGHT, NORTH, water, four |`, ph`THOUGHT, NORTH, water, four | long vowel`,` |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy |`, ph`CHOICE, noise, loiter, boy | diphthong vowel`,` |
| OW /oʊ/ | oh | GOAT, slow, toe |`, ph`GOAT, slow, toe | diphthong vowel`,` |
| UW /u/ | oo | GOOSE, new, due, tuna |`, ph`GOOSE, new, due, tuna | long vowel`,` |
| AW /aʊ/ | ow | MOUTH, noun, cow, shower |`, ph`MOUTH, noun, cow, shower | diphthong vowel`,` |
| UH /ʊ/ | uh | FOOT, took, good, put |`, ph`FOOT, took, good, put | short vowel`,` |
| P /p/ | p | | |`, ph`stop`,` |
| R /ɹ/ | r | | |`, ph`liquid`,` |
| S /s/ | s | | |`, ph`fricative`, `|
| ZH /ʒ/ | s | | |`, ph`fricative`, `|
| Z /z/ | s | | |`, ph`fricative`, `|
| SH /ʃ/ | sh | | |`, ph`fricative`, `|
| T /t/ | t | | |`, ph`stop`,` |
| DH /ð/ | th | | |`, ph`fricative`, `|
| TH /θ/ | th | | |`, ph`fricative`, `|
| V /v/ | v | | |`, ph`fricative`, `|
| W /w/ | w | | | `, ph`semi-vowel`, ` |
| HH W | wh |
| Y /j/ | y | | | `, ph`semi-vowel`, ` |
`,
ph`
## Using the library

In a JavaScript module loaded from a web page use`,`
\`\`\`js
import { convert } from 'https://cdn.jsdelivr.net/npm/phonate/phonate.js'
\`\`\`
`,ph`
In a NodeJS JavaScript module use`,`
\`\`\`js
import {convert} from "phonate"
\`\`\`
`,ph`
## Running the Software

Generate phonetic dictionary.

To execute

1. Install`,`[node][1]`,ph`(for example by installing [nvm][2] and executing`,`\`nvm use stable\``,ph`)
2. Install `,`bajel
   \`\`\`sh
   npm install -g bajel
   \`\`\`
3. In this directory execute
   \`\`\`sh
   npm install
   bajel
   \`\`\`
4. `,ph`This will generate a file called `,`\`phonetic.js\``,ph` with a mapping frem standard Inglish spelling tp phonetic spelling. It then runs an evaluation to see how close the two spellings are to each other, measured by Levenshtein distance weighted by how often the word occurs in English.


`,ph`Uses [The CMU Pronouncing Dictionary][3].
`,`
[1]: https://nodejs.org/en/
[2]: https://github.com/nvm-sh/nvm
[3]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict
`
);
