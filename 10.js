var natural = require('natural');
var tfidf = new natural.TfIdf();

var documents = [
  "this is a test document test",
  "important be document this be",
  "test important cat dog important asd def"
];

documents.forEach(function(item){
  tfidf.addDocument(item);
});
//Term Frequency Inverse Document Frequency
//tf = count(term) per doc
//idf = 1 + Math.log(10/(1 + n docs that contain))
//(to reverse the impact of 'and' etc which are found in any doc)

//var combinedTfidf = tf * idf;

tfidf.tfidfs('important cat', function(docIndex, measure) {
  console.log("Document", docIndex, ":", measure);
});

tfidf.listTerms(2).forEach(function(item) {
  console.log(item.term, ":", item.tfidf);
});

var json = JSON.stringify(tfidf);
var newTfidf = new natural.TfIdf(JSON.parse(json));

tfidf.listTerms(0).forEach(function(item) {
  console.log(item.term, ":", item.tfidf);
});
