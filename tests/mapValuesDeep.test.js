/* eslint-disable global-require */

'use strict';

describe('mapValuesDeep', () => {
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

        const mapped = _.mapValuesDeep(object, value => value.toUpperCase());

        expect(mapped.root1).toEqual('ROOT1VALUE');
        expect(mapped.root2).toEqual('ROOT2VALUE');
        expect(mapped.root3.sub1).toEqual('SUB1VALUE');
        expect(mapped.root3.sub2).toEqual('SUB2VALUE');
    });
});
