# Inglish

Have you ever wondered what English would look like if its spelling was actually phonetic? This is an attempt to do so by mapping each phoneme of English to a fixed letter, according to the following mapping:

| Fonym | Speling | Igsampol standerd | Igsampol Fonetic | Tip |
|---|---|---|---|---|
| AA /ɑ/~/ɒ/ | aa | BATH, PALM, START, fast, half, car | BATH, POLM, STORT, fast, haf, cor | long vouol |
| AE /æ/ | a | TRAP, BATH, cat, fast, pass | TRAP, BATH, cat, fast, pas | short vouol |
| EY /eɪ/ | ei | FACE, say, stain, freight | FAS, sa, stan, frat | difthong vouol |
| B /b/ | b | | | stop |
| K /k/ | c | | | stop |
| CH /tʃ/ | ch | | | afrocot |
| D /d/ | d | | | stop |
| AH /ʌ/ | e | STRUT, son, courage, blood | STRET, sen, cerij, bled | short vouol |
| EH /ɛ/ | eh | DRESS, bread, many, friend | DRES, bred, meny, frend | short vouol |
| IY /i/ | ee | FLEECE, sea, people, police | FLEES, see, peepol, polees |
| ER /ɝ/ | er | | | vouol |
| F /f/ | f | | | fricative |
| G /ɡ/ | g | | | stop |
| HH /h/ | h | | | asperait |
| AY /aɪ/ | ei | PRICE, try, night, height | PRIS, tri, nit, hit | vouol |
| IH /ɪ/ | i | KIT, myth, pretty, women | CIT, mith, prity, wimon | short vouol |
| JH /dʒ/ | j | | | afrocot |
| L /l/ | l | | | licwid |
| M /m/ | m | | | nasol |
| N /n/ | n | | | nasol |
| NG /ŋ/ | ng | | | nasol |
| AO /ɔ/ | o | THOUGHT, NORTH, CURE, water, four, sure | THOT, NORTH, CYOOR, woter, for, shoor | long vouol |
| OW /oʊ/ | oh | GOAT, slow, toe, mauve | GOT, slo, to, mov | difthong vouol |
| UH /ʊ/ | uh | FOOT, took, good, put | FOOT, tooc, good, poot | short vouol |
| AW /aʊ/ | ou | MOUTH, noun, cow, shower | MOUTH, noun, cou, shouer | difthong vouol |
| OY /ɔɪ/ | oi | CHOICE, noise, loiter, boy | CHOIS, nois, loiter, boi | difthong vouol |
| P /p/ | p | | | stop |
| R /ɹ/ | r | | | licwid |
| S /s/ | s | | | fricative |
| ZH /ʒ/ | s | | | fricative |
| Z /z/ | s | | | fricative |
| SH /ʃ/ | sh | | | fricative |
| T /t/ | t | | | stop |
| DH /ð/ | th | | | fricative |
| TH /θ/ | th | | | fricative |
| UW /u/ | oo | GOOSE, new, due, tuna | GUS, nu, du, tuno | long vouol |
| V /v/ | v | | | fricative |
| W /w/ | w | | | semi-vouol |
| HH W | wh |
| Y /j/ | y | | | semi-vouol |

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
