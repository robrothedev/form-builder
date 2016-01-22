(function() {

	'use strict';

	// dependencies
	require('angular');
	require('angular-ui-router');
	require('angular-bootstrap');

	// app module
	require('./components/app/app.module.js');

	// app sub modules
	require('./components/form_builder/form_builder.module.js');

})();