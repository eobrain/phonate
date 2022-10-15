import { ph } from './phonate.js'

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
| AE /æ/ | a | TRAP, BATH, cat, fast, pass, as, that, at, has, an |`, ph`TRAP, BATH, cat, fast, pass, as, that, at, has, an`, `| short vowel |
| AA /ɑ/~/ɒ/ | aa | PALM, START, car, was, are |`, ph`PALM, START, car, was, are`, `| long vowel |
| AO /ɔ/ | aw | THOUGHT, NORTH, water, four, also, all |`, ph`THOUGHT, NORTH, water, four, also, all`, `| long vowel |
| EY /eɪ/ | ay | FACE, say, stain, freight, they, became |`, ph`FACE, say, stain, freight, they, became`, `| diphthong vowel |
| B /b/ | b | baboon |`, ph`baboon`, `| stop |
| CH /tʃ/ | ch | cheetah, century |`, ph`cheetah, century`, '|', ph`affricate`, ` |
| D /d/ | d | deer |`, ph`deer`, `| stop |
| EH /ɛ/ | e | DRESS, bread, many, friend, their |`, ph`DRESS, bread, many, friend, their`, `| short vowel |
| IY /i/ | ee | FLEECE, sea, people, police, he |`, ph`FLEECE, sea, people, police, he`, ` |
| ER /ɝ/ | er | urchin, first |`, ph`urchin, first`, `| |
| F /f/ | f | flamingo |`, ph`flamingo`, '| fricative', `|
| G /ɡ/ | g | gazelle |`, ph`gazelle`, `| stop |
| HH /h/ | h | hippopotamus |`, ph`hippopotamus`, `| aspirate |
| IH /ɪ/ | i | KIT, myth, pretty, women, is, his, career |`, ph`KIT, myth, pretty, women, is, his, career`, `| short vowel |
| AY /aɪ/ | iy | PRICE, try, night, height, by, time |`, ph`PRICE, try, night, height, by, time`, `| vowel |
| JH /dʒ/ | j | jackal, college |`, ph`jackal, college`, `| affricate |
| K /k/ | k | cat |`, ph`cat`, `| stop |
| L /l/ | l | lion |`, ph`lion`, `| liquid |
| M /m/ | m | monkey |`, ph`monkey`, `| nasal |
| N /n/ | n | gnat |`, ph`gnat`, `| nasal |
| NG /ŋ/ | ng | anchor, long, among, doing |`, ph`anchor, long, among, doing`, `| nasal |
| AH /ʌ/ | o | STRUT, son, blood, the, of, a, one, from |`, ph`STRUT, son, blood, the, of, a, one, from`, `| short vowel |
| OW /oʊ/ | oe | GOAT, slow, toe, also, only |`, ph`GOAT, slow, toe, also, only`, `| diphthong vowel |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy |`, ph`CHOICE, noise, loiter, boy`, `| diphthong vowel |
| UW /u/ | oo | GOOSE, new, due, tuna, to, use |`, ph`GOOSE, new, due, tuna, to, use`, `| long vowel |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower |`, ph`MOUTH, noun, cow, shower`, `| diphthong vowel |
| P /p/ | p | penguin |`, ph`penguin`, `| stop |
| R /ɹ/ | r | rhinoceros |`, ph`rhinoceros`, `| liquid |
| S /s/ | s | sloth, century |`, ph`sloth, century`, `| fricative |
| SH /ʃ/ | sh | sheep |`, ph`sheep`, `| fricative |
| ZH /ʒ/ | si | genre, adhesion, allusion, asia, casual, decision |`, ph`genre, adhesion, allusion, asia, casual, decision`, `| fricative |
| T /t/ | t | tiger |`, ph`tiger`, `| stop |
| DH /ð/ | th | this, the, that |`, ph`this, the, that`, `| fricative |
| TH /θ/ | th | thrush |`, ph`thrush`, `| fricative |
| UH /ʊ/ | uh | FOOT, took, good, put, would |`, ph`FOOT, took, good, put, would`, `| short vowel |
| V /v/ | v | vulture, of |`, ph`vulture, of`, `| fricative |
| W /w/ | w | walrus |`, ph`walrus`, `| semi-vowel |
| HH W | wh | wheat |`, ph`wheat`, `|
| Y /j/ | y | yak |`, ph`yak`, `| semi-vowel |
| Z /z/ | z | zebra, as, was, is |`, ph`zebra, as, was, is, his`, `| fricative |
 
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
)
