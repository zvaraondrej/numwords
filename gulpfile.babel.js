'use strict';

import _ from 'lodash';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

var plugins = gulpLoadPlugins();

import clean from './gulp/clean';
import build from './gulp/build';
import copy from './gulp/copy';
import webpack from './gulp/webpack';
import serve from './gulp/serve';
import start from './gulp/start';
import transpile from './gulp/transpile';
import env from './gulp/env';
import test from './gulp/test';
import lint from './gulp/lint';

clean(gulp);
build(gulp);
transpile(gulp, plugins);
lint(gulp, plugins);
copy(gulp);
webpack(gulp, plugins);
serve(gulp);
start(gulp, plugins);
env(gulp, plugins);
test(gulp, plugins);