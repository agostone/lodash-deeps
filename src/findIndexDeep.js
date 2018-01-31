/* eslint-disable no-shadow,no-nested-ternary */

'use strict';

/**
 * This method is like _.findIndex except that it recursively looks in nested arrays too.
 *
 * @param {Array} array - The array to search in.
 * @param {Function} [predicate=_.identity] - The function invoked per iteration.
 * @param {integer} [fromIndex=0] - The index to search from.
 * @returns {Array|integer|-1} Index or index chain of the found element, else -1.
 */
function findIndexDeep(array, predicate = this.identity, fromIndex = 0) {
    let indexChain = [];
    const isArray = this.isArray;
    const findIndex = this.findIndex;

    predicate = this.iteratee(predicate, 3);

    function iteratee(value, index, array) {
        if (isArray(value)) {
            const result = findIndex(value, iteratee, 0);
            if (result !== -1) {
                indexChain = indexChain.concat(result);
                return true;
            }
            return false;
        }
        return predicate(value, index, array);
    }

    const result = this.findIndex(array, iteratee, fromIndex);
    return result !== -1 ? (indexChain.length ? [result].concat(indexChain) : result) : -1;
}

module.exports = findIndexDeep;
