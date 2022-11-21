import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from "sass";
import sassglob from 'gulp-sass-glob';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import autoprefixer from 'gulp-autoprefixer';
import webpack from 'webpack-stream';
import { deleteAsync } from "del";

const sass = gulpSass(dartSass);

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
		src: src + "/scss/main.+(scss|sass)",
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
export const styles = () => {
	return gulp
    .src(paths.styles.src)
    .pipe(sassglob())
    .pipe(
      sass({
        outputStyle: "compressed",
        includePaths: "./node_modules/",
      })
    )
    .pipe(concat(paths.cssOutputName))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        grid: true,
      })
    )
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

/* scripts */
export const scripts = () => {
	return gulp
    .src(paths.scripts.src)
    .pipe(
      webpack({
        mode: "production",
        module: {
          rules: [
            {
              test: /\.m?js$/,
              type: "javascript/auto",
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
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
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
export const images = () => {
	return gulp
		.src(paths.images.src)
		.pipe(
      imagemin()
			// imagemin([
			// 	// imagemin.gifsicle({ interlaced: true }),
			// 	imagemin.mozjpeg({ quality: 75, progressive: true }),
			// 	imagemin.optipng({ optimizationLevel: 5 }),
			// 	imagemin.svgo({
			// 		plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
			// 	}),
			// ])
		)
		.pipe(gulp.dest(paths.images.dist))
		.pipe(browserSync.reload({ stream: true }));
};

/* clean dist folder */
export const clean = () => {
	return deleteAsync(dist);
};

/* watch */
export const watchFiles = () => {
	gulp.watch(src + "/scss/**/*", { usePolling: true }, styles);
	gulp.watch(src + "/**/*.js", { usePolling: true }, scripts);
	gulp.watch(
		[paths.fonts.src, src + `**/*.{${fileswatch}}`],
		{ usePolling: true },
		copy
	);
	gulp.watch(paths.images.src, { usePolling: true }, images);
}

export default gulp.series(
  gulp.series(clean, gulp.parallel(styles, scripts, images, copy)),
  gulp.parallel(watchFiles, browsersync)
);