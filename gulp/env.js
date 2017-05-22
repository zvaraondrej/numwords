export default function env(gulp, plugins) {
  gulp.task('env:test', () => {
    plugins.env({
      vars: { NODE_ENV: 'test' },
    });
  });

  gulp.task('env:prod', () => {
    plugins.env({
      vars: { NODE_ENV: 'production' },
    });
  });
}
