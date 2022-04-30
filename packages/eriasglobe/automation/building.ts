var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task(
  'babel',
  gulp.series(function () {
    return babelFunc();
  })
);

function babelFunc() {
  return gulp
    .src('src/**/*')
    .pipe(
      babel({
        presets: ['@babel/preset-typescript', '@babel/preset-env'],
      })
    )
    .pipe(gulp.dest('bin/'));
}

gulp.task('compile', gulp.series(['babel']));

// Used to compile into a single file (for the web)
// gulp.task('compile-web', gulp.series(['webpack']));
