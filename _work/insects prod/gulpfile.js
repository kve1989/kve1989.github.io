const gulp   = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const panini = require('panini');

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('buildHTML', function() {
    gulp.src('src/html/**/*.html')
    .pipe(panini({
        root: 'src/html',
        layouts: 'src/html/layouts',
        partials: 'src/html/partials',
    }))
    .pipe(gulp.dest('src/'));
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch(['./src/html/{layouts,partials}/**/*'], [panini.refresh]);

})

gulp.task('default', gulp.parallel('watch', 'buildHTML', 'server', 'styles'));