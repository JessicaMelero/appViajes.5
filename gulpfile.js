var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

// Ejecuta por defecto browser y min
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
    return gulp.src('public/css/main.css', 'public/js/main.js')
    .pipe(uglify)
    .pipe(gulp.dest('public/css/main.min.js', 'public/js/main.min.js'))
});

// Escucha si hay cambios en cualquier archivo dentro de css y con extension .css
// y dentro de js y con extension .js
gulp.watch('public/css/**/*.css', 'public/js/**/*.js').on('change',function(){
    returngulp.src('public/css/main.css', 'public/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/css/main.min.css', 'public/js/main.min.js'))
});

// Escucha si hay cambios en index.html, en main.css y en main.js
gulp.watch(['index.html', 'public/css/main.js', 'public/js/main.js']).on('change', () =>{
    browserSync.reload();
});