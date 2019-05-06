'use strict';

const assert = require('assert');
const {
    deNico
} = require('./denico.js')

describe('denico', () => {
    it('decodes empty string to empty string', () => {
        assert.equal(deNico("abc", ""), "");
    });
});
