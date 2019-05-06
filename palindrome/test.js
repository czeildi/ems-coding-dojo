'use strict';

const assert = require('assert');
const {
    makePalindrome
} = require('./palindrome.js')

describe('make palindrome', () => {

    it('empty string returns empty string', () => {
        assert.equal(makePalindrome(""), "");
    });

    it('input is already a palindrome', () => {
        assert.equal(makePalindrome("abcba"), "abcba");
    });

    it('ab => aba', () => {
        assert.equal(makePalindrome("ab"), "aba");
    });

    it('abc => abcba', () => {
        assert.equal(makePalindrome("abc"), "abcba");
    });

    it('word is not a palindrom, but shorter prefix is', () => {
        assert.equal(makePalindrome("levele"), "elevele");
    });

    it('word is not a palindrom, but shorter prefix is', () => {
        assert.equal(makePalindrome("leveledf"), "fdeleveledf");
    });
});
