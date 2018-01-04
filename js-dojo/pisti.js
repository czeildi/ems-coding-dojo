'use strict';

function pisti(text, classes){
    if (text === "") {
        return []
    }
    if (classes.length === 0) {
        return [text];
    }

    let prefix = getLongestValidPrefix(text, classes)
    let suffix = text.slice(prefix.length)
    return [prefix, ...pisti(suffix, classes)]
}

function getLongestValidPrefix(text, classes) {
    let prefix = ""
    while (doCharsBelongToOneClass(prefix + text[prefix.length], classes)) {
        prefix = prefix + text[prefix.length]
    }
    return prefix
}

function doCharsBelongToOneClass(text, classes) {
    let sortedText = sortStringChars(text);  
    return classes
        .map(sortStringChars)
        // set include kellene, nem sub string
        .map(charClass => charClass.includes(sortedText))
        .some(c => c);
}

function sortStringChars(text) {
    let a = new Set(text.split('').sort())
    return [...a].join();
}

module.exports = { pisti };
