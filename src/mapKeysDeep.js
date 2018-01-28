/* eslint no-shadow: off */

'use strict';

/**
 * This method is like _.mapKeys except that it recursively maps keys.
 *
 * @param {Object} object - The target to map.
 * @param {Function} [iteratee=_.identity] - The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 */
function mapKeysDeep(object, iteratee = this.identity) {
    const result = {};
    iteratee = this.iteratee(iteratee, 3);

    this.forOwn(object, (value, key, object) => {
        this.set(
            result,
            iteratee(value, key, object),
            this.isObject(value) ? this.mapKeysDeep(value, iteratee) : value
        );
    });

    return result;
}

module.exports = mapKeysDeep;
