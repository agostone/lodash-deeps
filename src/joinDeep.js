'use strict';

/**
 * This method is like _.join except that it recursively joins nested arrays too.
 *
 * @param {Array} array - The array to convert
 * @param {string} [separator=','] - The element separator.
 * @returns {string} Returns the joined string.
 */
function joinDeep(array, separator = ',') {
    return this.join(this.flattenDeep(array), separator);
}

module.exports = joinDeep;
