var natural = require('natural');
var wordnet = new natural.WordNet();

var myWord = 'desert';

wordnet.lookup(myWord, function(results) {
  results.forEach(function(result) {
    console.log("\n");
    console.log(result.synsetOffset);
    console.log(result.pos);
    console.log(result.synonyms);
    console.log(result.gloss);
  });
});

wordnet.get(8522594, 'n', function(result){
  console.log(result.gloss);
});
