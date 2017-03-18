var natural = require('natural');
var Tagger = natural.BrillPOSTagger;

var myString = "Lys soldered the beautiful jewelry pieces".split(" ");

var base_folder = "some_path/lib/natural/brill_pos_tagger";
var rulesFilename = base_folder + "/data/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/lexicon_from_posjs.json";
var defaultCategory = 'N';

//var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
//var rules = new natural.Ruleset(rulesFilename);
var tagger = new Tagger(lexiconFilename, rulesFilename, defaultCategory);

console.log(tagger.tag(myString));
