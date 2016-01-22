(function() {
	
	'use strict';

	angular
		.module('app.formBuilder',[
			'ui.bootstrap'
		])

		// controllers
		.controller('FormBuilderCtrl',require('./form_builder.controller.js'))
		.controller('FormListCtrl',require('./form_list.controller.js'))
		

		// directives
		.directive('formBuilderFields',require('./form_builder_fields.directive.js'))
		.directive('formFields',require('./form_fields.directive.js'))
		.directive('fieldToolbar',require('./field_toolbar.directive.js'))
		.directive('openPopover',require('./open_popover.directive.js'))
		.directive('closePopover',require('./close_popover.directive.js'))
		.directive('formTitleInput',require('./form_title_input.directive.js'))

		// services
		.factory('FormService',require('./form_service.service.js'))

		// other
		.config(require('./form_builder.config.js'));

})();