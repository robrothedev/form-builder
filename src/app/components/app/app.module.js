(function() {

	'use strict';

	angular
		.module('app',[
			'ui.router',
			'app.formBuilder'
		])
		.controller('AppCtrl',require('./app.controller.js'));
		
})();