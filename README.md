# Inglish

Have you ever wondered what English would look like if its spelling was actually phonetic? This is an attempt to do so by mapping each phoneme of English to a fixed letter, according to the following mapping:

| Fonym | Speling | Igsampol standerd | Igsampol Fonetic | Tip |
|---|---|---|---|---|
| HH W | wh |
| AA /ɑ/~/ɒ/ | a (unstressed), o | BATH, PALM, START, fast, half, car | BATH, POLM, STORT, fast, haf, cor | long vouol |
| AE /æ/ | a | TRAP, BATH, cat, fast, pass | TRAP, BATH, cat, fast, pas | short vouol |
| AH /ʌ/ | e (primary stress), o | STRUT, son, courage, blood | STRET, sen, cerij, bled | short vouol |
| AO /ɔ/ | o | THOUGHT, NORTH, CURE, water, four, sure | THOT, NORTH, CYOOR, woter, for, shoor | long vouol |
| AW /aʊ/ | ow (secondary stress), ou | MOUTH, noun, cow, shower | MOUTH, noun, cou, shouer | difthong vouol |
| AY /aɪ/ | i | PRICE, try, night, height | PRIS, tri, nit, hit | vouol |
| B /b/ | b | | | stop |
| CH /tʃ/ | ch | | | afrocot |
| DH /ð/ | th | | | fricative |
| D /d/ | d | | | stop |
| EH /ɛ/ | e | DRESS, bread, many, friend | DRES, bred, meny, frend | short vouol |
| ER /ɝ/ | er | | | vouol |
| EY /eɪ/ | a (primary stress), ai | FACE, say, stain, freight | FAS, sa, stan, frat | difthong vouol |
| F /f/ | f | | | fricative |
| G /ɡ/ | g | | | stop |
| HH /h/ | h | | | asperait |
| IH /ɪ/ | i | KIT, myth, pretty, women | CIT, mith, prity, wimon | short vouol |
| IY /i/ | y (unstressed), ee | FLEECE, sea, people, police | FLEES, see, peepol, polees |
| JH /dʒ/ | j | | | afrocot |
| K /k/ | c | | | stop |
| L /l/ | l | | | licwid |
| M /m/ | m | | | nasol |
| NG /ŋ/ | ng | | | nasol |
| N /n/ | n | | | nasol |
| OW /oʊ/ | o | GOAT, slow, toe, mauve | GOT, slo, to, mov | difthong vouol |
| OY /ɔɪ/ | oy (unstressed), oi | CHOICE, noise, loiter, boy | CHOIS, nois, loiter, boi | difthong vouol |
| P /p/ | p | | | stop |
| R /ɹ/ | r | | | licwid |
| SH /ʃ/ | sh | | | fricative |
| S /s/ | s | | | fricative |
| TH /θ/ | th | | | fricative |
| T /p/ | /t/ | | | stop |
| UH /ʊ/ | oo (primary stress), u | FOOT, took, good, put | FOOT, tooc, good, poot | short vouol |
| UW /u/ | u | GOOSE, new, due, tuna | GUS, nu, du, tuno | long vouol |
| V /v/ | v | | | fricative |
| W /w/ | w | | | semi-vouol |
| Y /j/ | y | | | semi-vouol |
| ZH /ʒ/ | s | | | fricative |
| Z /z/ | s | | | fricative |

## Rening the softwer

Jenerait fonetic dicshonery.

To ecsocyut
Too ecsacioot

1. Instol [node][1] (for igsampol bi instoling [nvm][2] and ecsocyuting `nvm use stable`)
2. Instol bajel
   ```sh
   npm install -g bajel
   ```
3. In this directery ecsocyut
   ```sh
   npm install
   bajel
   ```
4. This wil jenerait a fil cold `phonetic.js` with a maping frem standerd Inglish speling to fonetic speling. It then rens an ivalyuashon to see hou clos the tu spelings or to eech ether, meserd bi Levenshtein distons watid bi hou ofton the werd ocers in Inglish.

To ren the web yuser interfais:

1. Instol live-server
   ```sh
   npm install -g live-server
   ```
2. Run live-server
   ```sh
   (cd site; live-server)
   ```
   Yusos [The CMU Pronouncing Dictionary][3].


[1]: https://nodejs.org/en/
[2]: https://github.com/nvm-sh/nvm
[3]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict
