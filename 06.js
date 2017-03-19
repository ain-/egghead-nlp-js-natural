var natural = require('natural');

var string1 = "close";
var string2 = "closer";
var string3 = "asdasdasd";

console.log(natural.JaroWinklerDistance(string1, string2));
console.log(natural.JaroWinklerDistance(string1, string3));

console.log(natural.LevenshteinDistance(string1, string2));
console.log(natural.LevenshteinDistance(string1, string3));

console.log(natural.DiceCoefficient(string1, string2));
console.log(natural.DiceCoefficient(string1, string3));
