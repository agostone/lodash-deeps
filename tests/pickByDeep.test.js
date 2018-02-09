/* eslint-disable global-require */

'use strict';

describe('pickByDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should return trees of elements matching predicate', () => {
        const aFunction = function () {};
        const AClass = class {
            static get one() {
                return 1;
            }
        };

        const theClass = new AClass();

        const source = {
            'one': 'one',
            'two': 'two',
            'three': undefined,
            'four': [
                'two', NaN, 'three'
            ],
            'six': aFunction,
            'seven': theClass,
            'eight': {
                'color': 'red'
            }
        };

        // string
        let foundElement = _.pickByDeep(source, value => value === 'two');
        expect(foundElement).toEqual({ 'two': 'two', 'four': source.four });

        // undefined
        foundElement = _.pickByDeep(source, value => value === undefined);
        expect(foundElement).toEqual({ 'three': undefined });

        // function
        foundElement = _.pickByDeep(source, value => value === aFunction);
        expect(foundElement).toEqual({ 'six': aFunction });

        // class (function two =P)
        foundElement = _.pickByDeep(source, value => value instanceof AClass);
        expect(foundElement).toEqual({ 'seven': theClass });

        // object
        foundElement = _.pickByDeep(source, value => value === 'red');
        expect(foundElement).toEqual({ 'eight': { 'color': 'red' } });
    });

    it('should return an empty object if nothing is found', () => {
        const source = {
            'one': 'one',
            'two': 'two',
            'three': {
                'four': {
                    'five': 'five',
                    'six': 'six'
                },
                'seven': 'seven'
            }
        };

        const foundElement = _.pickByDeep(source, value => value === 'distrubed');
        expect(foundElement).toEqual({});
    });
});
