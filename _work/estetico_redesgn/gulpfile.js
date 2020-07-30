import gulp from 'gulp';
import babel from "gulp-babel";
import terser from "gulp-terser";
import sass from 'gulp-sass';
import scss from 'gulp-sass';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify-es';
import cleancss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

let localhost = "localhost:3030",
	preprocessor = "scss", // Preprocessor (sass, scss)
	fileswatch = "html,htm,php,txt,yaml,twig,json,md",
	src = "src",
	dist = "dist";

let paths = {
	scripts: {
		src: [
			src + '/js/slick.min.js',
			src + '/js/baguetteBox.js',
			src + '/js/jquery.malihu.PageScroll2id.js',
			src + '/js/jquery.inputmask.bundle.min.js',
			src + '/js/custom.js'
		],
		dest: dist + "/js",
	},

	styles: {
		src: src + "/" + preprocessor + "/main.*",
		dest: dist + "/css",
	},

	fonts: {
		src: src + "/" + "fonts/**/*",
	},

	images: {
		src: src + "/" + "img/**/*",
	},

	cssOutputName: "main.css",
	jsOutputName: "main.js",
};

/* browsersync */
export const browsersync = () => {
	browserSync.init({
		server: { baseDir: dist + "/" },
		// proxy: localhost, // for PHP
		notify: false,
		ui: false,
	});
};

/* copy */
export const copy = () => {
    return gulp.src([
			paths.fonts.src,
			paths.images.src,
			src + '/vendor/**/*',
			src + '/*.html'
        ], {
            base: src
        })
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream({
            once: true
        }));
};

/* styles */
export const styles = () => {
	return gulp.src(paths.styles.src)
		.pipe(eval(preprocessor)())
		.pipe(concat(paths.cssOutputName))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
		.pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream())
};

/* scripts */
export const scripts = () => {
	return gulp.src(paths.scripts.src)
	.pipe(concat(paths.jsOutputName))
	// .pipe(babel({
	// 	presets: ['@babel/preset-env']
	// }))
	.pipe(terser())
	.pipe(gulp.dest(paths.scripts.dest))
	.pipe(browserSync.stream())
};

/* watch */
export const watch = () => {
	gulp.watch(src + '/**/*', styles);
	gulp.watch(src + '/**/*.js', scripts);
	gulp.watch([paths.fonts.src, paths.images.src, src + '/*.html'], gulp.series(copy));
};

export default gulp.series(
	gulp.parallel(styles, scripts, copy),
	gulp.parallel(watch, browsersync)
);
