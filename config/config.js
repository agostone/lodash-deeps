'use strict';

const config = {
    configDir: __dirname
};

config.rootDir = config.configDir.concat('/..');
config.srcDir = config.rootDir.concat('/src');
config.distDir = config.rootDir.concat('/dist');
config.testDir = config.rootDir.concat('/tests');
config.entryDir = config.rootDir.concat('/entry');

config.webpackConfigFile = config.configDir.concat('/webpack.config.js');
config.karmaConfigFile = config.configDir.concat('/karma.config.js');
config.distFile = config.distDir.concat('/lodash-deeps.min.js');
config.webEntryFile = config.entryDir.concat('/web');

config.testFilePattern = config.testDir.concat('/**/*.test.js');

module.exports = config;
