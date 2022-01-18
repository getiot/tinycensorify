const censoredWords = ["sad", "bad", "mad"];
const customCensoredWords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

const _censor = censor;
export { _censor as censor };
const _addCensoredWord = addCensoredWord;
export { _addCensoredWord as addCensoredWord };
const _getCensoredWords = getCensoredWords;
export { _getCensoredWords as getCensoredWords };
