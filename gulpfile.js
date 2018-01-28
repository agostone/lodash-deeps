/* eslint-disable import/no-dynamic-require */

'use strict';

const gulp = require('gulp');
const KarmaServer = require('karma').Server;
const jasmine = require('gulp-jasmine');
const webpack = require('gulp-webpack');
const eslint = require('gulp-eslint');

const config = require('./config/config');
const webpackConfig = require(config.webpackConfigFile);

gulp.task('test-browser', ['build'], (callback) => {
    const karmaServer = new KarmaServer({
        configFile: config.karmaConfigFile
    });
    karmaServer.start(callback);
});

gulp.task('test-node', ['build'], () =>
    gulp.src(config.testFilePattern)
        .pipe(jasmine())
);

gulp.task('test', ['test-browser', 'test-node']);

gulp.task('build', ['lint'], () =>
    gulp.src(config.srcDir)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.distDir))
);

gulp.task('lint', () => {
    gulp.src(config.srcDir.concat('/*'))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

