const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const webpack = require("webpack-stream");
const del = require("del");

let localhost = "localhost:3000",
	fileswatch = "html,htm,php,txt,yaml,twig,json,md",
	src = "src",
	dist = "dist";

let paths = {
	scripts: {
		src: src + "/js/main.js",
		dest: dist + "/assets/js",
	},

	styles: {
		src: src + "/sass/main.+(scss|sass)",
		dest: dist + "/assets/css",
	},

	fonts: {
		src: src + "/" + "fonts/**/*",
	},

	images: {
		src: src + "/images/**/*",
		dist: dist + "/assets/images/",
	},

	cssOutputName: "main.min.css",
	jsOutputName: "main.min.js",
};

/* browsersync */
const browsersync = () => {
	browserSync.init({
		server: { baseDir: dist + "/" },
		// proxy: localhost, // for PHP
		notify: false,
		ui: false,
	});
};

/* copy */
const copy = () => {
	return gulp
		.src([paths.fonts.src, src + "/*.html"], {
			base: src,
		})
		.pipe(gulp.dest(dist))
		.pipe(
			browserSync.stream({
				once: true,
			})
		);
};

/* styles */
const styles = () => {
	return (
		gulp
			.src(paths.styles.src)
			// .pipe(eval(preprocessor)())
			.pipe(sass({ outputStyle: "compressed" }))
			.pipe(concat(paths.cssOutputName))
			.pipe(
				autoprefixer({
					overrideBrowserslist: ["last 10 versions"],
					grid: true,
				})
			)
			.pipe(gulp.dest(paths.styles.dest))
			.pipe(browserSync.stream())
	);
};

/* scripts */
const scripts = () => {
	return gulp
		.src(paths.scripts.src)
		.pipe(
			webpack({
				mode: "production",
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: "babel-loader",
								options: {
									presets: [
										[
											"@babel/preset-env",
											{
												debug: true,
												corejs: 3,
												useBuiltIns: "usage",
											},
										],
									],
								},
							},
						},
					],
				},
			})
		)
		.pipe(rename(paths.jsOutputName))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(browserSync.stream());
};

/* images */
const images = () => {
	return gulp
		.src(paths.images.src)
		.pipe(
			imagemin([
				// imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 95, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(gulp.dest(paths.images.dist))
		.pipe(browserSync.reload({ stream: true }));
};

/* clean dist folder */
const clean = () => {
	return del(dist);
};
/* watch */
const watchFiles = () => {
	gulp.watch(src + "/sass/**/*", { usePolling: true }, styles);
	gulp.watch(src + "/**/*.js", { usePolling: true }, scripts);
	gulp.watch(
		[paths.fonts.src, paths.images.src, src + `**/*.{${fileswatch}}`],
		{ usePolling: true },
		gulp.series(copy)
	);
};

const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));
const watch = gulp.series(build, gulp.parallel(watchFiles, browsersync));

/* Exports Tasks */
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.copy = copy;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
