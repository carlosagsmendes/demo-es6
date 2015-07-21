var jspm = require("jspm");
var builder = new jspm.Builder();
jspm.setPackagePath('.');

function build() {
	
	return builder.trace('knockout-bundle.js').then(function (tree) {
			var currentTree = tree;
	})
	.catch(function (error) {
		console.log(error);
	})
}

build();

