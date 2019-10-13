'use strict';

const assert = require('assert');
const {
    weekdayOfDate
} = require('./weekdayOfDate.js')

describe('weekday of date', () => {

    it('return day index of Monday for 1900-01-01', () => {
        assert.equal(weekdayOfDate(1900, 1, 1), 0);
    });

    it('return day index Tuesday for 1900-01-02', () => {
        assert.equal(weekdayOfDate(1900, 1, 2), 1);
    });

    it('return day index of Monday if 1 week passed', () => {
        assert.equal(weekdayOfDate(1900, 1, 8), 0);
    });

    it('return day index if 1 month passed', () => {
        assert.equal(weekdayOfDate(1900, 2, 1), 3);
    });

    it('return day index for Sunday', () => {
        assert.equal(weekdayOfDate(1900, 1, 7), 6);
    });

    it('return day index if 3 months passed', () => {
        assert.equal(weekdayOfDate(1900, 4, 1), 6);
    });

    it('return day index if 1 year passed', () => {
        assert.equal(weekdayOfDate(1901, 1, 1), 1);
    });

    it('return day index if 5 year passed including leap year', () => {
        assert.equal(weekdayOfDate(1905, 1, 1), 6);
    });

    it('return day index if 4 year passed and leap year February', () => {
        assert.equal(weekdayOfDate(1904, 2, 1), 0);
    });

});
