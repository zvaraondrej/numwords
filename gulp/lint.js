import _ from 'lodash';
import paths from './paths';
import lazypipe from 'lazypipe';
import runSequence from 'run-sequence';

export default function lint(gulp, plugins){

    let lintClientScripts = lazypipe()
        .pipe(plugins.eslint)
        .pipe(plugins.eslint.format);

    let lintServerScripts = lazypipe()
        .pipe(plugins.eslint)
        .pipe(plugins.eslint.format);

    /*let lintClientScripts = lazypipe()
        .pipe(plugins.eslint, `${paths.client.root}.eslintrc`)
        .pipe(plugins.eslint.format);

    let lintServerScripts = lazypipe()
        .pipe(plugins.eslint, `${paths.server.root}.eslintrc`)
        .pipe(plugins.eslint.format);*/


    gulp.task('lint:scripts', cb => {
        // runSequence(['lint:scripts:client', 'lint:scripts:server'], cb)
        runSequence(['lint:scripts:client'], cb)
    });

    gulp.task('lint:scripts:client', () => {
        return gulp.src(paths.client.scripts)
            .pipe(lintClientScripts());
    });

    gulp.task('lint:scripts:server', () => {
        return gulp.src(paths.server.scripts)
            .pipe(lintServerScripts());
    });

    gulp.task('lint:watch:scripts', () => {
        gulp.watch(['client/**/*.js', 'server/**/*.js'], ['lint:scripts']);
  });

}