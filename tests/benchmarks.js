'use strict';

// Benchmarks uses the same source structure as unit tests.
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const _ = require('lodash');
const lodashDeeps = require('../src/index');
_.mixin(lodashDeeps);

// add tests
suite
    .add('compactDeep', () => {
        const source = ['one', 'two', undefined, ['', false, 'one', ['two', NaN, 'three']], null, false, 0, 'three'];
        _.compactDeep(source);
    })
    .add('filterDeep', () => {
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

        _.filterDeep(source, value => value.color === 'red');
    })
    .add('findDeep', () => {
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

        _.findDeep(source, value => value === 'six', 0, false);
    })
    .add('findIndexDeep', () => {
        const source = ['one', 'two', ['three', ['four', 'five'], 'six'], 'seven'];

        _.findIndexDeep(source, value => value === 'five');
    })
    .add('joinDeep', () => {
        const source = ['one', 'two', ['three', ['four', 'five', ['six'], 'seven']]];
        _.joinDeep(source, '-');
    })
    .add('mapKeysDeep', () => {
        const object = {
            'root1': 'root1value',
            'root2': 'root2value',
            'root3': {
                'sub1': 'sub1value',
                'sub2': 'sub2value'
            }
        };

        _.mapKeysDeep(object, (value, key) => key.toUpperCase());
    })
    .add('mapValuesDeep', () => {
        const object = {
            'root1': 'root1value',
            'root2': 'root2value',
            'root3': {
                'sub1': 'sub1value',
                'sub2': 'sub2value'
            }
        };

        _.mapValuesDeep(object, value => value.toUpperCase());
    })
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log('Done.');
    })
    // run async
    .run({ 'async': true });
