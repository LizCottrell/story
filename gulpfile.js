var gulp = require('gulp')
var browserSync = require('browser-sync')
var reload = browserSync.reload
var sass = require('gulp-sass')

gulp.task('styles', function () {
  gulp.src('sass/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('css/'))
  .pipe(reload({stream: true}))
})

gulp.task('browser', function () {
  browserSync({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('default', ['styles', 'browser'], function () {
  gulp.watch('sass/main.scss', ['styles'])
})
