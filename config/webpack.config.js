'use strict';

const config = require('./config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const basename = require('path').basename;

const entry = basename(config.distFile).split('.')[0];

module.exports = {
    target: 'web',
    entry: {
        [`${entry}`]: config.webEntryFile,
        'lodash': config.rootDir.concat('/node_modules/lodash/lodash.js')
    },
    output: {
        path: config.distDir,
        filename: '[name].min.js'
    },
    plugins: [
        new UglifyJsPlugin({
            extractComments: true,
            uglifyOptions: {
                warnings: false,
                ecma: 6
            }
        })
    ]
};
