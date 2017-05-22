import lazypipe from 'lazypipe';
import paths from './paths';

export default function transpile(gulp, plugins) {
  const transpileServer = lazypipe()
    .pipe(plugins.sourcemaps.init)
    .pipe(plugins.babel, {
      plugins: ['transform-class-properties', 'transform-runtime'],
    })
    .pipe(plugins.sourcemaps.write, '.');

  gulp.task('transpile:server', () =>
    gulp
      .src(paths.server.scripts)
      .pipe(transpileServer(plugins))
      .pipe(gulp.dest(`${paths.dist}/${paths.server.root}`)),
  );
}
