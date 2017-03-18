var natural = require('natural');
var myString = "I'm surprised! I didn't know you could make it.";

var tokenizer = new natural.WordTokenizer(); // discard punctuation

console.log(tokenizer.tokenize(myString));

var punctTokenizer = new natural.WordPunctTokenizer(); // keep punctuation

console.log(punctTokenizer.tokenize(myString));

var treeTkn = new natural.TreebankWordTokenizer(); // keep semantics

console.log(treeTkn.tokenize(myString));

var regTkn = new natural.RegexpTokenizer({pattern: /[!?.]/}); //sentences

console.log(regTkn.tokenize(myString));
