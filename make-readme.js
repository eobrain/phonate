import { ph } from "./phonate.js";

console.log(
  `
# English

See https://github.com/eobrain/spehl
For an example of a project that uses this library.

Have you ever wondered what English would look like if
its spelling was actually phonetic.
This is an attempt to do so by mapping each phoneme
of English to a fixed set of letters, according to the following mapping.

| Phoneme | Spelling | Example, standard | Example, phonetic | Type |
|---|---|---|---|---|
| AE /æ/ | ah | TRAP, BATH, cat, fast, pass |`,ph`TRAP, BATH, cat, fast, pass`,`| short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car |`, ph`PALM, START, car`,`| long vowel |
| B /b/ | b | baboon |`, ph`baboon`,`| stop |
| K /k/ | c | cat |`, ph`cat`,`| stop |
| CH /tʃ/ | ch | cheetah |`, ph`cheetah`,`|`, ph`affricate`,` |
| D /d/ | d | deer |`, ph`deer`,`| stop |
| AH /ʌ/ | u | STRUT, son, blood |`, ph`STRUT, son, blood`,`| short vowel |
| IY /i/ | ee | FLEECE, sea, people, police |`, ph`FLEECE, sea, people, police`,` |
| EH /ɛ/ | eh | DRESS, bread, many, friend |`, ph`DRESS, bread, many, friend`,`| short vowel |
| AY /aɪ/ | ei | PRICE, try, night, height |`, ph`PRICE, try, night, height`,`| vowel |
| EY /eɪ/ | ey | FACE, say, stain, freight |`, ph`FACE, say, stain, freight`,`| diphthong vowel |
| ER /ɝ/ | er | urchin |`, ph`urchin`, `| |
| F /f/ | f | flamingo |`, ph`flamingo`, `| fricative`, `|
| G /ɡ/ | g | gazelle |`, ph`gazelle`, `| stop |
| HH /h/ | h | hippopotamus |`, ph`hippopotamus`, `| aspirate |
| IH /ɪ/ | ih | KIT, myth, pretty, women |`, ph`KIT, myth, pretty, women`,`| short vowel |
| JH /dʒ/ | j | jackal |`, ph`jackal`, `| affricate |
| L /l/ | l | lion |`, ph`lion`, `| liquid |
| M /m/ | m | monkey |`, ph`monkey`, `| nasal |
| N /n/ | n | gnat |`, ph`gnat`, `| nasal |
| NG /ŋ/ | ng | anchor |`, ph`anchor`, `| nasal |
| AO /ɔ/ | ou | THOUGHT, NORTH, water, four |`, ph`THOUGHT, NORTH, water, four`,`| long vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy |`, ph`CHOICE, noise, loiter, boy`,`| diphthong vowel |
| OW /oʊ/ | oh | GOAT, slow, toe |`, ph`GOAT, slow, toe`,`| diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna |`, ph`GOOSE, new, due, tuna`,`| long vowel |
| AW /aʊ/ | ow | MOUTH, noun, cow, shower |`, ph`MOUTH, noun, cow, shower`,`| diphthong vowel |
| UH /ʊ/ | uh | FOOT, took, good, put |`, ph`FOOT, took, good, put`,`| short vowel |
| P /p/ | p | penguin |`, ph`penguin`, `| stop |
| R /ɹ/ | r | rhinoceros |`, ph`rhinoceros`, `| liquid |
| S /s/ | s | sloth |`, ph`sloth`, `| fricative |
| ZH /ʒ/ | zh | genre |`, ph`genre`, `| fricative |
| Z /z/ | z | zebra |`, ph`zebra`, `| fricative |
| SH /ʃ/ | sh | sheep |`, ph`sheep`, `| fricative |
| T /t/ | t | tiger |`, ph`tiger`, `| stop |
| DH /ð/ | th | this |`, ph`this`, `| fricative |
| TH /θ/ | th | thrush |`, ph`thrush`, `| fricative |
| V /v/ | v | vulture |`, ph`vulture`, `| fricative |
| W /w/ | w | walrus |`, ph`walrus`, `| semi-vowel |
| HH W | wh | wheat |`, ph`wheat`, `|
| Y /j/ | y | yak |`, ph`yak`, `| semi-vowel |
 
## Using the library

In a JavaScript module loaded from a web page use 
\`\`\`js
import { convert } from 'https://cdn.jsdelivr.net/npm/phonate/phonate.js'
\`\`\`
 
In a NodeJS JavaScript module use 
\`\`\`js
import {convert} from "phonate"
\`\`\`
 
## Running the Software

Generate phonetic dictionary.

To execute

1. \`cd\` to the directory containing this README.md file.
1. Install [node][1] (for example by installing [nvm][2] and executing \`nvm use\` )
2. Install dependencies
   \`\`\`sh
   npm install
   \`\`\`
3. In this directory execute
   \`\`\`sh
   npx bajel
   \`\`\`
4.  This will generate a file called  \`phonetic.js\`  with a mapping frem standard Inglish spelling tp phonetic spelling. It then runs an evaluation to see how close the two spellings are to each other, measured by Levenshtein distance weighted by how often the word occurs in English.


Uses [The CMU Pronouncing Dictionary][3].
 
[1]: https://nodejs.org/en/
[2]: https://github.com/nvm-sh/nvm
[3]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict
`
);
