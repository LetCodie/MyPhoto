const gulp = require('gulp')
const bootlint = require('gulp-bootlint')

gulp.task('bootlint', function(){
  return gulp.src('./index.html')
          .pipe(bootlint())
})
