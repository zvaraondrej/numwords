import runSequence from 'run-sequence';

export default function build(gulp) {
  gulp.task('build', (cb) => {
    runSequence(
      ['clean:dist', 'clean:tmp'],
      'transpile:server',
      ['copy:package', 'copy:favicon', 'webpack:dist'],
      cb,
    );
  });
}
