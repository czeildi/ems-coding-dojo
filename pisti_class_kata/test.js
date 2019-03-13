'use strict';

const assert = require('assert');
let { pisti } = require('./pisti.js')

describe('split chars of string into classes', () => {

  it('returns whole string as one class if no classes', () => {
    assert.deepEqual(["Hello World"], pisti("Hello World", []))
  })

  it('splitted string if every char is in different class', () => {
    assert.deepEqual(["a", "b"], pisti("ab", ["a", "b"]))
  })

  it('returns whole string if every char in same class', () => {
    assert.deepEqual(["ab"], pisti("ab", ["ab"]))
  })

  it('splitted string if every char is in different class and longer input', () => {
      assert.deepEqual(["a", "b", "c"], pisti("abc", ["a", "b", "c"]))
  })

//   it('two chars in the same class, one in another', () => {
//     assert.deepEqual(["ab", "c"], pisti("abc", ["ab", "c"]))
//   })

  it('returns whole string if every char in same larger class', () => {
      assert.deepEqual(["ab"], pisti("ab", ["abc"]))
  })

  it('returns whole string if every char in same larger class regardless of order', () => {
    assert.deepEqual(["ab"], pisti("ab", ["bca"]))
  })

  it('returns whole string if every char in same larger class regardless of order', () => {
    assert.deepEqual(["ac"], pisti("ac", ["bca"]))
  })

  it('two chars in the same class, one in another', () => {
    assert.deepEqual(["ab", "c"], pisti("abc", ["ab", "c"]))
  })

  it('two identical chars in the same class, one in another', () => {
    assert.deepEqual(["aa", "b"], pisti("aab", ["a", "b"]))
  })

  // invisible char class

});
