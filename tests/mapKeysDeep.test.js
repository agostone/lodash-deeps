/* eslint-disable global-require */

'use strict';

describe('mapKeysDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should execute iteratee for all object and nested object properties', () => {
        const object = {
            'root1': 'root1value',
            'root2': 'root2value',
            'root3': {
                'sub1': 'sub1value',
                'sub2': 'sub2value'
            }
        };

        const mapped = _.mapKeysDeep(object, (value, key) => key.toUpperCase());

        expect(
            Object.keys(mapped).concat(Object.keys(mapped.ROOT3))
        ).toEqual(['ROOT1', 'ROOT2', 'ROOT3', 'SUB1', 'SUB2']);
    });
});
