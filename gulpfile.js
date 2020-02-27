var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('resize', function () {
  gulp.src('images/full/*.{jpg,png}')
    .pipe(imageResize({
      height : 300
    }))
    .pipe(gulp.dest('dist/thumbnails'));
});