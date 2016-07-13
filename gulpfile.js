var gulp = require('gulp'),
    rimraf = require('rimraf'),
    plugins = require('gulp-load-plugins')({
        lazy: true
    }),
    runSequence = require('run-sequence');

var paths = {
    src: [
        'src/**/*.html',
        'src/**/*.js',
        'src/**/*.css',
        'src/favicon.ico'
    ],
    dist: 'dist',
    config: 'src/app/config/*.json'
};

gulp.task('copy:src', function() {
    return gulp.src(paths.src).pipe(gulp.dest(paths.dist));
});

gulp.task('copy:config', function() {
    return gulp.src(paths.config).pipe(gulp.dest(paths.dist));
});

gulp.task('clean:dist', function(cb) {
    rimraf(paths.dist, cb);
});

gulp.task('watch', function() {
    gulp.watch(paths.src, ['copy:src']);
    gulp.watch(paths.config, ['copy:config']);
});

gulp.task('server', plugins.shell.task('tsc && concurrently \"npm run tsc:w\" \"npm run lite\" '));

gulp.task('default', function(done) {
    runSequence('clean:dist', 'copy:config', 'copy:src', 'watch', 'server', done);
});
