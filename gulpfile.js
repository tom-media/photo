var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('resize', function () {
  return gulp.src('dist/full/*.{jpg,png}')
    .pipe(imageResize({
      height : 250
    }))
    .pipe(gulp.dest('dist/thumbnails'));
});