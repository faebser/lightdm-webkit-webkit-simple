var simpleGreeter = (function (lightdm, Zepto, Mustache) {
	// javascript module pattern
	"use strict"; // enable strict mode for javascript module
	// private vars
	var module = {},
	z = Zepto,
	l = lightdm,
	m = Mustache;
	// private methods
	// public methods
	module.init = function () {
	};
	//return the module
	return module;
}(lightdm, Zepto, Mustache));

Zepto(function($){
  simpleGreeter.init();
});