'use strict';

/**
 * This method is like _.filter except that it recursively filters nested collections too.
 *
 * @param {Array|Object} collection - The collection to filter
 * @param {Function} [predicate=_.identity] - The function invoked per iteration.
 * @returns {Array} Returns a new filtered array.
 */
function filterDeep(collection, predicate = this.identity) {
    let result = this.filter(collection, predicate);

    // @todo: Fix, not performance friendly.
    this.forEach(collection, (value) => {
        if (this.isObject(value)) {
            result = [...result, ...this.filterDeep(value, predicate)];
        }
    });

    return result;
}

module.exports = filterDeep;
