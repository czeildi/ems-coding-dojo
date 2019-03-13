'use strict';

const assert = require('assert');
const {
    speechShortener
} = require('./speech.js')

describe('speech shortener', () => {

    it('shortens empty string to empty string', () => {
        assert.equal(speechShortener(""), "");
    });

    it('shortens short word to itself', () => {
        assert.equal(speechShortener("asd"), "asd");
    });

    ['a', 'e', 'i', 'o', 'u'].forEach(vowel => {
        it('replaces vowel `' + vowel + '` after 4th char with .', () => {
            assert.equal(speechShortener(vowel.repeat(4)), vowel.repeat(3) + ".");
        });
    });

    it('does not cut after 4th character if there is no vowel', () => {
        assert.equal(speechShortener("asdfg"), "asdfg");
    });

    it('cuts word at the first vowel at later position as well', () => {
        assert.equal(speechShortener("asdfaa"), "asdf.");
    });

    it('shortens every word in the text', () => {
        assert.equal(speechShortener("asd aaaa asd aaaa"), "asd aaa. asd aaa.");
    });

});
