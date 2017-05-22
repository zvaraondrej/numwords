export default function lint(gulp) {
  gulp.task('watch', () => {
    gulp.watch(['client/**/*.js', 'server/**/*.js', 'gulp/**/*.js'], ['lint:scripts']);
  });
}
