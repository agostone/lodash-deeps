/* eslint-disable global-require */

'use strict';

describe('findIndexDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should return the index of element found in root', () => {
        const aFunction = function () {};
        const AClass = class {
            static get one() {
                return 1;
            }
        };

        const source = ['one', 'two', undefined,
            [
                'two', NaN, 'three'
            ],
            aFunction,
            new AClass(),
            {
                'color': 'red'
            }
        ];

        // string
        let foundIndex = _.findIndexDeep(source, value => value === 'two');
        expect(foundIndex).toEqual(1);

        // undefined
        foundIndex = _.findIndexDeep(source, value => value === undefined);
        expect(foundIndex).toEqual(2);

        // function
        foundIndex = _.findIndexDeep(source, value => value === aFunction);
        expect(foundIndex).toEqual(4);

        // class (function two =P)
        foundIndex = _.findIndexDeep(source, value => value instanceof AClass);
        expect(foundIndex).toEqual(5);

        // object
        foundIndex = _.findIndexDeep(source, value => value === source[6]);
        expect(foundIndex).toEqual(6);
    });

    it('should return the index path of an element found in deep multi dimension arrays', () => {
        const source = ['one', 'two', ['three', ['four', 'five'], 'six'], 'seven'];

        const foundIndex = _.findIndexDeep(source, value => value === 'five');
        expect(foundIndex).toEqual([2, 1, 1]);
    });

    it('should return -1 if nothing is found', () => {
        const source = ['one', 'two', ['three', ['four', 'five'], 'six'], 'seven'];

        const foundIndex = _.findIndexDeep(source, value => value === 'distrubed');
        expect(foundIndex).toEqual(-1);
    });

    it('should return the index of element found when starting from offset 2', () => {
        const source = ['one', 'two', ['three', ['four', 'five'], 'six'], 'seven'];

        let foundIndex = _.findIndexDeep(source, value => value === 'seven', 2);
        expect(foundIndex).toEqual(3);

        foundIndex = _.findIndexDeep(source, value => value === 'six', 2);
        expect(foundIndex).toEqual([2, 2]);
    });

    it('should return -1 if nothing is found when starting from offset 5', () => {
        const source = ['one', 'two', ['three', ['four', 'five'], 'six'], 'seven'];

        const foundIndex = _.findIndexDeep(source, value => value === 'two', 5);
        expect(foundIndex).toEqual(-1);
    });
});
