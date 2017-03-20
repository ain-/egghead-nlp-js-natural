var natural = require('natural');
var soundex = natural.SoundEx;
var metaphone = natural.Metaphone;

var word1 = "pair";
var word2 = "pear";

soundex.compare(word1, word2) ?
  console.log("SoundEx: Alike!")
  : console.log("SoundEx: Unalike!");

metaphone.compare(word1, word2) ?
  console.log("Metaphone: Alike!")
  : console.log("Metaphone: Unalike!");

console.log(soundex.process(word1));
console.log(soundex.process(word2));
console.log(metaphone.process(word1));
console.log(metaphone.process(word2));

var word3 = "write";
var word4 = "right";

console.log(soundex.process(word3));
console.log(soundex.process(word4));
console.log(metaphone.process(word3));
console.log(metaphone.process(word4));
