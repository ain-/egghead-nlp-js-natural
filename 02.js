var natural = require('natural');
var stemmer = natural.PorterStemmer;

console.log(stemmer.stem("mangoes"));
console.log(stemmer.stem("hearing"));
console.log(stemmer.stem("sadness"));

//faulty
console.log(stemmer.stem("cupcakes"));
console.log(stemmer.stem("awaking"));
console.log(stemmer.stem("wrongly"));

var ruStemmer = natural.PorterStemmerRu;
console.log(ruStemmer.stem("проба"));

var esStemmer = natural.PorterStemmerEs;
console.log(esStemmer.stem("espécimen"));

var myString = "I am baking cakes in the ovens.";
console.log(stemmer.tokenizeAndStem(myString));
