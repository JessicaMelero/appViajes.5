var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

//Ejecuta por defecto browser y min
gulp.task("default", ['browser', 'min']);

// Levanta el servidor
gulp.task('browser', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});
//  Minifica el proyecto
gulp.task('min', () => {
    return gulp.src('js/app.js')
    .pipe(uglify)
    .pipe(gulp.dest('js/app.min.js'))
});

// Escucha si hay cambior en cualquier archivo dentro de js y con extension .js
gulp.watch('js/**/*.js').on('change',function(){
    returngulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/app.min.js'))
});

// Escucha si hay cambios en index.html y en app.js
gulp.watch(['index.html', 'js/app.js']).on('change', () =>{
    browserSync.reload();
});