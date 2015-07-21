var gulp = require('gulp');
var insert = require('gulp-insert');
var KarmaServer = require('karma').Server;

gulp.task('insert', function () {
	return gulp.src('*bundle.js')
		.pipe(insert.prepend("'bundle true;\"\n"))
		.pipe(gulp.dest("."));
});



/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false
	}, done).start();
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true,
		reporters: ['coverage'],
		preprocessors: {
			'test/**/*.js': ['babel'],
			'src/**/*.js': ['babel', 'coverage']
		},
		coverageReporter: {
			type: 'html',
			dir: 'build/reports/coverage'
		}
	}, function (e) {
		done();
	});
});

