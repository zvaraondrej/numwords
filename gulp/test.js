import runSequence from 'run-sequence';
import lazypipe from 'lazypipe';
import paths from './paths';

export default function start(gulp, plugins) {
  const mocha = lazypipe().pipe(plugins.mocha, {
    reporter: 'spec',
    timeout: 5000,
    require: ['./mocha.conf.js'],
  });

  gulp.task('test', cb => runSequence('test:server', cb));

  gulp.task('test:server', (cb) => {
    runSequence('env:test', 'mocha:integration', cb);
  });

  gulp.task('mocha:integration', () => gulp.src(paths.server.test.integration).pipe(mocha()));
}
