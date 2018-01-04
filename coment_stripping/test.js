'use strict';

const assert = require('assert');
let stripComments = require('./stripComments.js')

describe('strip comments', () => {

  it('returns empty string for empty string', () => {
    assert.equal('', stripComments('', []));
  }); 
  
  it('return input untouched', () => {
    assert.equal('test string', stripComments('test string', []));
  });

  it('strips spaces from end of line', () => {
    assert.equal('test string\n', stripComments('test string    \n'))
  });

  it('strips mixed whitespace from end of line', () => {
    assert.equal('test string\n', stripComments('test string \t \n'))
  });

  it('strips mixed whitespace from end of several lines', () => {
    assert.equal('test test\nstring\n', stripComments('test test \t\nstring\t  \n'))
  });

  it('strips whitespaces when no new line at end of input', () => {
    assert.equal('test', stripComments('test \t  '));
  });

  it('removes comment markers wthout following comment', () => {
    assert.equal('test\n\n', stripComments('test#\n#\n', ['#']))
  });

  it('removes comment after the marker', () => {
    assert.equal('test\n', stripComments('test#   valami\n', ['#']));
  });

  it('remove comment from end of input without newline', () => {
    assert.equal('test', stripComments('test#  valami', ['#']));
  })

  it('remove whitespaces before comment', () => {
    assert.equal('test', stripComments('test  # test', ['#']));
  });

  it('removes comment with marker ! as well', () => {
    assert.equal('test\n', stripComments('test ! comment\n', ['!']))
  });

  it('removes comment with multiple markers', () => {
    assert.equal(
      'test\ntest2',
      stripComments('test#    \ntest2\t !  ', ['#', '!'])
    );
  });

  it('removes comment with comment marker of longer text', () => {
    assert.equal(
      'test\ntest#.acb not a comment\n',
      stripComments('test#.acb*comment\ntest#.acb not a comment\n', ['#.acb*'])
    )
  })

});
