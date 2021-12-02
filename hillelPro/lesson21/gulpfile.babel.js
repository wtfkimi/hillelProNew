import gulp from 'gulp';
let sass = require('gulp-sass')(require('sass'));
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import browserSync from 'browser-sync'

const paths = {
    styles: {
        src: 'src/styles/*.scss',
        dist: 'dist/styles/'
    },
    scripts: {
        src: 'src/scripts/*.js',
        dist: 'dist/scripts/'
    },
    fonts: {
        src: 'src/fonts/*.{eot,svg,ttf,woff,woff2}',
        dist: 'dist/fonts/',
    },
    images: {
        src: 'src/images/**',
        dist: 'dist/images/'
    }
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del([ 'dist' ]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dist));
}

export function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dist));
}

export function fonts() {
    return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dist));
}

export function images() {
    return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dist))
}

function watchFiles() {
    browserSync({
        server: "./",
        files: [paths.styles.dist, paths.scripts.dist, 'index.html'],
        plugins: [
            {
                module: "bs-html-injector",
                options: {
                    files: ["./*.html"]
                }
            }
        ]
    })
    gulp.watch('./*.html', styles)
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.images.src, images);
}
export { watchFiles as watch };

const build = gulp.series(clean, gulp.parallel(images, fonts, styles, fonts, scripts));

export {build as build}

export default build;
