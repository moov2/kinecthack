/**
 * -----------------------------------------------------------------------------
 * Loads in gulp, quite important for a gulp build file.
 * -----------------------------------------------------------------------------
 */

var gulp = require('gulp');

/**
 * -----------------------------------------------------------------------------
 * Load plug-ins used throughout the build process.
 * -----------------------------------------------------------------------------
 */

var prefix = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass');

/**
 * -----------------------------------------------------------------------------
 * Custom variables to aid the build process.
 * -----------------------------------------------------------------------------
 */

/**
 * Object containing paths to files / directories used throughout the build.
 */
var paths = {
    css: './css/',
    scss: '**/*.scss',
}

/**
 * -----------------------------------------------------------------------------
 * Useful functions to aid the build.
 * -----------------------------------------------------------------------------
 */

/**
 * Returns path to the directory that contains the CSS.
 */
var src = function (path) {
    return (!path) ? paths.css : paths.css + path;
}

/**
 * Global error handler that is used to prevent the watch task from ending when
 * failing to execute a task (e.g. the Sass fails to compile due to error in Sass
 * files).
 */
var handleError = function (err) {
    console.log(err.toString());
    this.emit('end');
};

/**
 * -----------------------------------------------------------------------------
 * Gulp tasks that are utilised by the default tasks.
 * -----------------------------------------------------------------------------
 */

/**
 * Compiles Sass into CSS.
 */
gulp.task('styles', function () {
    gulp.src(src(paths.scss))
        .pipe(sass())
            .on('error', handleError)
        .pipe(prefix('last 1 version', '> 1%', 'ie 8'))
        .pipe(gulp.dest(src()));
});

/**
 * Set up files that should be watched for changes that trigger a task to run.
 */
gulp.task('watch', function() {
    // changes to Sass files will run the Sass to CSS compilation task
    gulp.watch(src(paths.scss), ['styles']);
});

/**
 * -----------------------------------------------------------------------------
 * Default gulp task.
 * -----------------------------------------------------------------------------
 */

/**
 * Default task is to be used to keep an eye on .scss file changes and then compile
 * the Sass into CSS.
 */
gulp.task('default', ['styles', 'watch']);
