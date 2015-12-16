'use strict';

module.exports = function(num) {
    // num % 1 === 0 checks for a whole number
    if (num % 1 === 0) {
        return true;
    }

    return false;
};
