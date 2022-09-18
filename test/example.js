import {convert} from "../phonate.js"
//import {convert} from "https://cdn.jsdelivr.net/npm/phonate/phonate.js"


import test from 'ava';

test('basic', t => {
 	t.is(convert("spell English"), "spehl Ihnglihsh");
});

test('case', t => {
    t.is(convert("spell"), "spehl");
    t.is(convert("Spell"), "Spehl");
    t.is(convert("SPELL"), "SPEHL");
    t.is(convert("speLL"), "speHL");
});

test('not a word', t => {
    t.is(convert("thisIsNotAWord"), "thisIsNotAWord");
});