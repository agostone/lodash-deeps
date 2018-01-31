'use strict';

/**
 * This method is like _.compact except that it recursively compacts nested arrays too.
 *
 * @param {Array} array - The array to compact.
 * @returns {Array} Returns a new compacted array.
 */
function compactDeep(array) {
    const length = array == null ? 0 : array.length;
    const result = [];

    let resIndex = 0;

    for (let index = -1; ++index < length;) {
        const value = array[index];
        if (value) {
            result[resIndex++] = this.isArray(value) ? this.compactDeep(value) : value;
        }
    }
    return result;
}

module.exports = compactDeep;
