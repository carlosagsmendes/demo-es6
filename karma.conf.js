module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '.',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jspm', 'mocha', 'chai'],

		jspm: {
			loadFiles: ['test/**/*.js'],
    		serveFiles: ['lib/**/*.js']
  
		},
		
		proxies: {
            '/base': '/base/lib'
        },
		
		// list of files / patterns to load in the browser
		files: [],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/**/*.js': ['babel'],
			'lib/**/*.js': ['babel']
		},
		'babelPreprocessor': {
			options: {
				sourceMap: 'inline',
				modules: 'system',
				moduleIds: false,
				optional: [
					"es7.decorators",
					"es7.classProperties"
				]
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],


		// web server port
		port: 9000,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,
		
		plugins: [
			'karma-chrome-launcher',
			'karma-jspm',
			'karma-mocha',
			'karma-chai',
      		'karma-mocha-reporter',
	  		'karma-babel-preprocessor'
	    ]
	});
};