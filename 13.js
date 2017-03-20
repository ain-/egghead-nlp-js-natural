var natural = require('natural');
var fs = require('fs');
var tokenizer = new natural.WordTokenizer();

var text = fs.readFileSync('lotsofwords.txt', 'utf-8');
var corpus = tokenizer.tokenize(text);
var spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.getCorrections("birtday"));

var sentence = "Tey hade truble fiinding th thing".split(" ");

sentence.forEach(x => console.log(spellcheck.getCorrections(x)));
