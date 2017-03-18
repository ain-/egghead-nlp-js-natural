var natural = require('natural');
var NGrams = natural.NGrams;

var myString = "Jane Smith, along with Mary Adams and John Black, created the project.";

console.log(NGrams.bigrams(myString));

console.log(NGrams.trigrams(myString));

console.log(NGrams.ngrams(myString, 4));

console.log(NGrams.ngrams(myString, 3, '[S]', '[E]')); //padding
