'use strict';

/**
 * This method is like _.fill except that it recursively fills nested arrays too.
 *
 * You can also specify which levels to fill in a deep hierarchy.
 *
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill the array with.
 * @param {integer} [start=0] - The starting position.
 * @param {integer} [end=array.length] - The ending position.
 * @param {string|array} [level=*] - Pattern(s) to select levels to fill.
 * @returns {string} Returns array.
 */
function fillDeep(array, value, start = 0, end = array.length, index = '*') {



    return this.map(array, (arrayValue) => {
        if (this.isArray(arrayValue)) {

        }

        return
    })
}

module.exports = joinDeep;
