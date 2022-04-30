/*eslint
no-console: 0
*/

var gulp = require('gulp');

require('./automation/building.ts');

gulp.task(
  'watch',
  gulp.series(['compile'], function () {
    gulp.watch('src/**/*', gulp.series(['compile']));
  })
);

// Used to compile into a single file (for the web)
// gulp.task(
//   'watch-web',
//   gulp.series(['webpack'], function () {
//     gulp.watch('src/**/*', gulp.series(['webpack']));
//   })
// );
