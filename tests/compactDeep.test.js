/* eslint-disable global-require */

'use strict';

describe('compactDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should compact the requested array and it\'s nested arrays', () => {
        const source = ['one', 'two', undefined,
            [
                '', false, 'one',
                [
                    'two', NaN, 'three'
                ]
            ],
            null, false, 0, 'three'
        ];

        const compacted = _.compactDeep(source);

        expect(compacted).toEqual(['one', 'two',
            [
                'one',
                [
                    'two', 'three'
                ]
            ],
            'three'
        ]);
    });
});
