'use strict';

var assert = require('assert');
var isWholeNumber = require('./is-whole-number');

describe('is whole number', function() {
    it('it should return true if is a whole number', function() {
        assert.equal(isWholeNumber(1), true);
        assert.equal(isWholeNumber(11), true);
        assert.equal(isWholeNumber(13), true);
        assert.equal(isWholeNumber(0), true);
    });

    it('it should return false if not a whole number', function() {
        assert.equal(isWholeNumber(-1), false);
        assert.equal(isWholeNumber(-12), false);
        assert.equal(isWholeNumber(1.2), false);
        assert.equal(isWholeNumber(-1.2), false);
        assert.equal(isWholeNumber(-13.1), false);
        assert.equal(isWholeNumber(13.1), false);
    });
});
