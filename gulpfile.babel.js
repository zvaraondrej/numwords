import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
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
import prettify from './gulp/prettify';
import watch from './gulp/watch';


const plugins = gulpLoadPlugins();

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
prettify(gulp);
watch(gulp);
