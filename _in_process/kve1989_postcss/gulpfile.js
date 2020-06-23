import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import postcss from 'gulp-postcss';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import pimport from 'postcss-import';
import minmax from 'postcss-media-minmax';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';

let src = 'src',
	dist = 'dist';

let paths = {
	scripts: {
		src: src + '/js/index.js',
		dest: dist + '/js',
	},

	styles: {
		src: src + '/css/index.css',
		dest: dist + '/css',
	},

	fonts: {
		src: src + '/' + 'fonts/**/*',
	},

	images: {
		src: src + '/' + 'images/**/*',
	},

	cssOutputName: 'main.css',
	jsOutputName: 'main.js',
};

/* browsersync */
export const browsersync = () => {
	browserSync.init({
		server: { baseDir: dist + '/' },
		notify: false,
		ui: false
	});
};

/* copy */
export const copy = () => {
    return gulp.src([
			paths.fonts.src,
			paths.images.src,
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
    return gulp
		.src(paths.styles.src)
		.pipe(postcss([pimport, minmax, autoprefixer, csso]))
		.pipe(replace(/\.\.\//g, ''))
		.pipe(rename(paths.cssOutputName))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
};

/* scripts */
export const scripts = () => {
	return gulp.src(paths.scripts.src)
	.pipe(webpack({
		mode: 'production',
		output: {
			filename: paths.jsOutputName
		},
		watch: false,
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [['@babel/preset-env', {
								debug: true,
								corejs: 3,
								useBuiltIns: 'usage'
							}]]
						}
					}
				}
			]
		}
	}))
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
