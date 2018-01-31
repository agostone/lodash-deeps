/* eslint-disable no-shadow */

'use strict';

/**
 * This method is like _.find except that it recursively looks in nested arrays too.
 *
 * @param {Array|Object} collection - The collection to search in.
 * @param {Function} [predicate=_.identity] - The function invoked per iteration.
 * @param {integer} [fromIndex=0] - The index to search from.
 * @param {boolean} [returnRoot=true] - If true, always returns root elements.
 * @returns {*|undefined} The found element, else undefined.
 */
function findDeep(collection, predicate = this.identity, fromIndex = 0, returnRoot = true) {
    let foundItem;
    const find = this.find;
    const isObject = this.isObject;

    predicate = this.iteratee(predicate, 3);

    function iteratee(value, key, collection) {
        let result = predicate(value, key, collection);
        if (!result) {
            if (isObject(value)) {
                result = find(value, iteratee, 0);
                if (result && !foundItem) {
                    foundItem = result;
                }
            }
        }
        return !!result;
    }

    const result = this.find(collection, iteratee, fromIndex);
    return foundItem && !returnRoot ? foundItem : result;
}

module.exports = findDeep;
