/* eslint-disable global-require */

'use strict';

describe('filterDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should filter the requested collection and it\'s nested collection', () => {
        const AClass = class {
            constructor(color) {
                this.color = color;
            }
        };

        const classInstance = new AClass('red');

        const source = [
            {
                'color': 'red',
                'sub': {
                    'color': 'black',
                    'sub': [
                        {
                            'color': 'red'
                        }
                    ]
                }
            },
            1,
            NaN,
            'red',
            classInstance,
            [
                {
                    'color': 'red'
                },
                {
                    'color': 'blue'
                },
                new AClass('black')
            ]
        ];

        const filtered = _.filterDeep(source, value => value.color === 'red');

        expect(filtered).toEqual([
            source[0],
            classInstance,
            {
                'color': 'red'
            },
            {
                'color': 'red'
            }
        ]);
    });
});
