import gulp   from 'gulp'
import uglify from 'gulp-uglify'
import babel  from 'gulp-babel'
import cssMin from 'gulp-css'

const src  = gulp.src('src/lib/**/*.js')
const css  = gulp.src('src/lib/**/*.css')
const dist = gulp.dest('dist')
const lib = gulp.dest('lib')

// gulp.task('default', gulp.series('build', () => {}))

gulp.task(
  'build',
  () => src.pipe(babel()).pipe(lib)
)
gulp.task(
  'uglify',
  () => src.pipe(babel())
           .pipe(uglify())
           .pipe(dist)
)

gulp.task(
  'styleBuild',
  () => css.pipe(cssMin()).pipe(lib)
)

gulp.task(
  'styleUglify',
  () => css.pipe(cssMin()).pipe(dist)
)
