import paths from './paths';

export default function copy(gulp) {
  gulp.task('copy:package', () =>
    gulp.src(['package.json'], { cwdbase: true }).pipe(gulp.dest(paths.dist)),
  );

  gulp.task('copy:favicon', () =>
    gulp
      .src([`${paths.client.root}favicon.ico`])
      .pipe(gulp.dest(`${paths.dist}/${paths.client.root}/`)),
  );
}
