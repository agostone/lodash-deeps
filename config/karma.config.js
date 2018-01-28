'use strict';

const config = require('./config');

module.exports = function (karmaConfig) {
    const karmaOptions = {

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            config.distDir.concat('/lodash.min.js'),
            config.distFile,
            config.testFilePattern
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values:
        // - config.LOG_DISABLE
        // - config.LOG_ERROR
        // - config.LOG_WARN
        // - config.LOG_INFO
        // - config.LOG_DEBUG
        logLevel: karmaConfig.LOG_WARN,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // if true, it capture browsers, run tests and exit
        singleRun: true
    };

    karmaConfig.set(karmaOptions);
};
