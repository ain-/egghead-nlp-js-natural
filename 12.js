var natural = require('natural');
var trie = new natural.Trie();

var animals = ['dog', 'cat', 'cow', 'ca'];

animals.forEach(x => trie.addString(x));

console.log(trie.contains('dog'));
console.log(trie.keysWithPrefix('c'));
console.log(trie.findMatchesOnPath('cats'));
