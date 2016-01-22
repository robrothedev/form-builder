(function() {
	
	'use strict';

	module.exports = formTitleInput;

	function formTitleInput() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/form_builder/html/form-title-input.html',
			link: link,
			scope: {
				title: '@',
				onSubmit: '&'
			}
		};

		return directive;

		function link(scope) {
			scope.form = {};
			
			if (scope.title) {
				scope.form.title = scope.title;
				scope.submit_title = 'Save Form';
			}
			else {
				scope.submit_title = 'Create Form';
			}
			
			scope.submitForm = function() {
				scope.onSubmit()(scope.form.title);
				if (!scope.title) {
					// creating a form so reset the title
					scope.form.title = '';
				}
			}
		}
	}

})();