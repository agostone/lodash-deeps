/* eslint-disable no-shadow */

'use strict';

/**
 * This method is like _.filter except that it recursively filters nested collections too.
 *
 * @param {Array|Object} collection - The collection to filter.
 * @param {Function} [predicate=_.identity] - The function invoked per iteration.
 * @returns {Array} Returns a new filtered array.
 */
function filterDeep(collection, predicate = this.identity) {
    const filter = this.filter;
    const isObject = this.isObject;

    predicate = this.iteratee(predicate, 3);

    const subResults = [];
    function iteratee(value, index, collection) {
        if (isObject(value)) {
            subResults.push(filter(value, iteratee));
        }
        return predicate(value, index, collection);
    }

    return this.flatten(this.filter(collection, iteratee).concat(subResults));
}

module.exports = filterDeep;
