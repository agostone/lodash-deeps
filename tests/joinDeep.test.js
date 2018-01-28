/* eslint-disable global-require */

'use strict';

describe('joinDeep', () => {
    let _;

    // CommonJS or browser
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        _ = require('lodash');
        _.mixin(require('../src/index'));
    } else {
        _ = window._;
    }

    it('should join the requested nested array', () => {
        const source = ['one', 'two', ['three', ['four', 'five', ['six'], 'seven']]];
        const joined = _.joinDeep(source);

        expect(joined).toEqual('one,two,three,four,five,six,seven');
    });

    it('should join the requested nested array using custom separator', () => {
        const source = ['one', 'two', ['three', ['four', 'five', ['six'], 'seven']]];
        const joined = _.joinDeep(source, '-');

        expect(joined).toEqual('one-two-three-four-five-six-seven');
    });
});
