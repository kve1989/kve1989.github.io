let localhost = 'localhost:3030',
	preprocessor = 'sass', // Preprocessor (sass, scss)
	fileswatch = 'html,htm,txt,json,md,woff2',
	baseDir = 'app';

let paths = {

	scripts: {
		src: [
			// 'node_modules/jquery/dist/jquery.min.js', // npm vendor example (npm i --save-dev jquery)
			baseDir + '/#src/js/app.js' // app.js. Always at the end
		],
		dest: baseDir + '/js',
	},

	styles: {
		src: baseDir + '/#src/' + preprocessor + '/main.*',
		dest: baseDir + '/css',
	},

		cssOutputName: 'app.css',
		jsOutputName: 'app.js'
};


const { src, dest, parallel, series, watch } = require('gulp'),
			sass = require('gulp-sass'),
			scss = require('gulp-sass'),
			browserSync = require('browser-sync').create(),
			rename = require('gulp-rename'),
			uglify = require('gulp-uglify'),
			concat = require('gulp-concat'),
			cleancss = require('gulp-clean-css'),
			autoprefixer = require('gulp-autoprefixer'),
			webpack = require("webpack-stream");

function browsersync() {
	browserSync.init({
		server: { baseDir: baseDir + '/' },
		// proxy: localhost, // for PHP
		notify: false
	});
};

function styles() {
	return src(paths.styles.src)
	.pipe(eval(preprocessor)())
	.pipe(concat(paths.cssOutputName))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
	.pipe(dest(paths.styles.dest))
	.pipe(browserSync.stream())
}

function scripts() {
	return src(paths.scripts.src)
		.pipe(webpack({
			mode: 'production',
			output: {
				filename: paths.jsOutputName
			},
			watch: false,
			devtool: "source-map",
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									debug: true,
									corejs: 3,
									useBuiltIns: "usage"
								}]
							]
						}
					}
				}]
			}
		}))
		// .pipe(uglify())
		.pipe(dest(paths.scripts.dest))
		.pipe(browserSync.stream())
};
// function scripts() {
// 	return src(paths.scripts.src)
// 	.pipe(concat(paths.jsOutputName))
// 	.pipe(uglify())
// 	.pipe(dest(paths.scripts.dest))
// 	.pipe(browserSync.stream())
// }

function startwatch() {
	watch(baseDir + '/**/' + preprocessor + '/**/*', styles);
	watch(baseDir + '/**/*.{' + fileswatch + '}').on('change', browserSync.reload);
	watch([baseDir + '/**/*.js', '!' + paths.scripts.dest + '/*.js'], scripts);
}

exports.browsersync = browsersync;
exports.assets = series(styles, scripts);
exports.styles = styles;
exports.scripts = scripts;
exports.default = parallel(styles, scripts, browsersync, startwatch);
