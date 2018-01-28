/* eslint no-shadow: off */

'use strict';

/**
 * This method is like _.mapValues except that it recursively maps values.
 *
 * @param {Object} object - The target to map.
 * @param {Function} [iteratee=_.identity] - The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 */
function mapValuesDeep(object, iteratee = this.identity) {
    const result = {};
    iteratee = this.iteratee(iteratee, 3);

    this.forOwn(object, (value, key, object) => {
        this.set(
            result,
            key,
            this.isObject(value) ? this.mapValuesDeep(value, iteratee) : iteratee(value, key, object)
        );
    });

    return result;
}

module.exports = mapValuesDeep;
