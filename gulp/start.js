import nodemon from 'nodemon';
import paths from './paths';

export default function start(gulp, plugins) {
  function onServerLog(log) {
    /* eslint-disable no-console */
    console.log(
      plugins.util.colors.white('[') +
        plugins.util.colors.yellow('nodemon') +
        plugins.util.colors.white('] ') +
        log.message,
    );
  }

  gulp.task('start:server', () => {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    nodemon(`-w ${paths.server.root} ${paths.server.root} --exec babel-node`).on(
      'log',
      onServerLog,
    );
  });

  gulp.task('start:server:prod', () => {
    process.env.NODE_ENV = process.env.NODE_ENV || 'production';
    nodemon(`-w ${paths.dist}/${paths.server.root} ${paths.dist}/${paths.server.root}`).on(
      'log',
      onServerLog,
    );
  });
}
