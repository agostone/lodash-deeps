/* eslint-disable no-shadow,guard-for-in,no-restricted-syntax */

'use strict';

/**
 * This method is like _.pickBy except that it recursively checks in nested collections too.
 *
 * @param {Object} object - The Source object.
 * @param {Function} [predicate=_.identity] - The function invoked per property.
 * @returns {Object} Returns a new object.
 */
function pickByDeep(object, predicate = this.identity) {
    const isObject = this.isObject;
    const isEmpty = this.isEmpty;
    const pickBy = this.pickBy;

    predicate = this.iteratee(predicate, 2);

    function iteratee(value, key) {
        let result = false;
        if (isObject(value)) {
            result = !isEmpty(pickBy(value, iteratee));
        }

        return result || predicate(value, key);
    }

    return pickBy(object, iteratee);
}

module.exports = pickByDeep;
