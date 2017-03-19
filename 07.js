var natural = require('natural');
var classifier = new natural.BayesClassifier();

var trainingData = [
  {text: 'drugs on sale', label: 'spam'},
  {text: 'you are the winner', label: 'spam'},
  {text: 'earn more money', label: 'spam'},
  {text: 'free drugs', label: 'spam'},
  {text: 'project planning', label: 'notspam'},
  {text: 'birthday party', label: 'notspam'},
  {text: 'drinks on Monday?', label: 'notspam'},
  {text: 'purchase confirmed', label: 'notspam'}
];

var testData = [
  {text: 'cheap drugs', label: 'spam'},
  {text: 'winner money', label: 'spam'},
  {text: 'party next weekend', label: 'notspam'},
  {text: 'hang out', label: 'notspam'}
];

trainingData.forEach(function(item) {
  classifier.addDocument(item.text, item.label);
});

classifier.train();

testData.forEach(function(item) {
  var labelGuess = classifier.classify(item.text);
  console.log("\n");
  console.log("Label:", labelGuess);
  console.log(classifier.getClassifications(item.text));
});
