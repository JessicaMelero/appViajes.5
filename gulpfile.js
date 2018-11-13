var gulp = require('gulp');
var uglify = require('uglify');
var browserSync = require('broser-sync');

gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});
 
gulp.task('min', () => {
    return gulp.src('js/app.js')
    .pipe(uglify)
    .pipe(gulp.dest('js/app.min.js'))
});

gulp.watch('js/**/*.js').on('change',function(){
    returngulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/app.min.js'))
});


gulp.watch(['index.html', 'js/app.js']).on('change', () =>{
    browserSync.reload();
});