const gulp = require("gulp");
const sass = require("gulp-sass");
const sassglob = require("gulp-sass-glob");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const webpack = require("webpack-stream");
const del = require("del");

const localhost = "localhost:3000",
	fileswatch = "html,htm,php,txt,yaml,twig,json,md",
	imgFiles = "jpg,jpeg,png,svg,gif,webp,avif",
	src = "src",
	dist = "dist";

const paths = {
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
		src: src + `/images/**/*.{${imgFiles}}`,
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
			.pipe(sassglob())
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
				imagemin.mozjpeg({ quality: 75, progressive: true }),
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
		[paths.fonts.src, src + `**/*.{${fileswatch}}`],
		{ usePolling: true },
		copy
	);
	gulp.watch(paths.images.src, { usePolling: true }, images);
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
