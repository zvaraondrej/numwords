import webpackStream from 'webpack-stream';
import webpack2 from 'webpack';
import paths from './paths';
import makeWebpackConfig from './../webpack/webpack.make';

export default function webpack(gulp, plugins) {
  gulp.task('webpack:dist', () => {
    const webpackDistConfig = makeWebpackConfig({ BUILD: true });
    return gulp
      .src(webpackDistConfig.entry.app)
      .pipe(webpackStream(webpackDistConfig, webpack2))
      .on('error', () => {
        this.emit('end');
      })
      .pipe(gulp.dest(`${paths.dist}/${paths.client.root}`));
  });

  gulp.task('webpack:dev', () => {
    const webpackDevConfig = makeWebpackConfig({ DEV: true });
    return gulp
      .src(webpackDevConfig.entry.app)
      .pipe(plugins.plumber())
      .pipe(webpackStream(webpackDevConfig, webpack2))
      .pipe(gulp.dest('.tmp'));
  });
}
