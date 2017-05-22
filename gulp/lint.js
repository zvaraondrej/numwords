import lazypipe from 'lazypipe';
import runSequence from 'run-sequence';
import paths from './paths';

export default function lint(gulp, plugins) {
  const lintScripts = lazypipe().pipe(plugins.eslint).pipe(plugins.eslint.format);

  gulp.task('lint:scripts', (cb) => {
    runSequence(['lint:scripts:client', 'lint:scripts:server', 'lint:scripts:gulp'], cb);
  });

  gulp.task('lint:scripts:client', () => gulp.src(paths.client.scripts).pipe(lintScripts()));

  gulp.task('lint:scripts:server', () => gulp.src(paths.server.scripts).pipe(lintScripts()));

  gulp.task('lint:scripts:gulp', () => gulp.src(paths.gulp.scripts).pipe(lintScripts()));
}
