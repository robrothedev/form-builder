(function() {

	'use strict';

	module.exports = formBuilderConfig;
	formBuilderConfig.$inject = ['$urlRouterProvider','$stateProvider'];

	function formBuilderConfig($urlRouterProvider,$stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index', {
				url: '/',
				templateUrl: 'app/components/form_builder/html/form-list.html',
				controller: 'FormListCtrl as form_list_ctrl'
			})
			.state('edit', {
				url: '/edit/:formIdx',
				templateUrl: 'app/components/form_builder/html/form-builder.html',
				controller: 'FormBuilderCtrl as form_builder_ctrl'
			})
			.state('new', {
				url: '/new',
				templateUrl: 'app/components/form_builder/html/form-builder.html',
				controller: 'FormBuilderCtrl as form_builder_ctrl'
			});
	}

})();