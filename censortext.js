var censoredWords = ["sad", "bad", "mad"];
var customCensorWords = [];

function censor(inStr){
	for(idx in censorWords){
		inStr = inStr.replace(censoredWords[idx], "***");
	}

	for(idx in customCensorWords){
		inStr = inStr.replace(customCensorWords[idx], "***");
	}

	return inStr;
}

function addCensoredWord(word){
	customCensorWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensorWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;