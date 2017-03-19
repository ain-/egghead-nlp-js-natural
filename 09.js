var natural = require('natural');

natural.LogisticRegressionClassifier.load('classifier.json', null,
  function(err, classifier) {

  err ? console.log(err)
  : console.log(classifier.classify("spam email"));
});
