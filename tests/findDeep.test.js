/* eslint-disable global-require */

'use strict';

describe('findDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should return the element found in array root', () => {
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
        let foundElement = _.findDeep(source, value => value === 'two');
        expect(foundElement).toEqual('two');

        // undefined
        foundElement = _.findDeep(source, value => value === undefined);
        expect(foundElement).toEqual(undefined);

        // function
        foundElement = _.findDeep(source, value => value === aFunction);
        expect(foundElement).toEqual(aFunction);

        // class (function two =P)
        foundElement = _.findDeep(source, value => value instanceof AClass);
        expect(foundElement).toEqual(jasmine.any(AClass));

        // object
        foundElement = _.findDeep(source, value => value === source[6]);
        expect(foundElement).toEqual(source[6]);
    });

    it('should return the element found in object root', () => {
        const aFunction = function () {};
        const AClass = class {
            static get one() {
                return 1;
            }
        };

        const source = {
            'one': 'one',
            'two': 'two',
            'three': undefined,
            'four': [
                'two', NaN, 'three'
            ],
            'six': aFunction,
            'seven': new AClass(),
            'eight': {
                'color': 'red'
            }
        };

        // string
        let foundElement = _.findDeep(source, value => value === 'two');
        expect(foundElement).toEqual('two');

        // undefined
        foundElement = _.findDeep(source, value => value === undefined);
        expect(foundElement).toEqual(undefined);

        // function
        foundElement = _.findDeep(source, value => value === aFunction);
        expect(foundElement).toEqual(aFunction);

        // class (function two =P)
        foundElement = _.findDeep(source, value => value instanceof AClass);
        expect(foundElement).toEqual(jasmine.any(AClass));

        // object
        foundElement = _.findDeep(source, value => value === source[6]);
        expect(foundElement).toEqual(source[6]);
    });

    it('should return the element found in a deeper level', () => {
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

        const foundElement = _.findDeep(source, value => value === 'five', 0, false);
        expect(foundElement).toEqual('five');
    });

    it('should return the root of the element found in a deeper level', () => {
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

        const foundElement = _.findDeep(source, value => value === 'five');
        expect(foundElement).toEqual(source.three);
    });

    it('should return undefined if nothing is found', () => {
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

        const foundElement = _.findDeep(source, value => value === 'distrubed');
        expect(foundElement).toEqual(undefined);
    });

    it('should return the found element when starting from offset 2', () => {
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

        let foundElement = _.findDeep(source, value => value === 'seven', 2, false);
        expect(foundElement).toEqual('seven');

        foundElement = _.findDeep(source, value => value === 'six', 2, false);
        expect(foundElement).toEqual('six');
    });

    it('should return undefined if nothing is found when starting from offset 3', () => {
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

        const foundElement = _.findDeep(source, value => value === 'two', 3);
        expect(foundElement).toEqual(undefined);
    });
});
