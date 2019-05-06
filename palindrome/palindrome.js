'use strict';

function makePalindrome(word) {
    let i = 0;
    while(true) {
        if (isPalindrome(word.substring(i, word.length))) {
            return word + reverseString(word.substring(0, i));
        }
        if (isPalindrome(word.substring(0, word.length - i))) {
            return reverseString(word.substring(word.length - i)) + word;
        }
        i++;
    }
}

function isPalindrome(word) {
    return word === reverseString(word);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

module.exports = {
    makePalindrome
};
