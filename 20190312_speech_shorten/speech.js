'use strict';

const LONGEST_VOWEL_WORD = 3;
const vowelRegexp = /[aeiou]/;

function speechShortener(speech) {
    return speech.split(" ").map(wordShortener).join(" ");
}

function wordShortener(word) {
    const mandatoryPart = word.substring(0, LONGEST_VOWEL_WORD);
    const laterPart = word.substring(LONGEST_VOWEL_WORD);

    const shortenedPart = cutAtFirstVowel(laterPart).replace(vowelRegexp, '.');

    return mandatoryPart + shortenedPart;
}

function cutAtFirstVowel(string) {
    const firstVowelIndex = string.search(vowelRegexp);
    if (firstVowelIndex == -1) {
        return string;
    }

    return string.substring(0, firstVowelIndex + 1);
}

module.exports = {
    speechShortener
};
