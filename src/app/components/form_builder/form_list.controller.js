(function() {
	
	'use strict';

	module.exports = FormListCtrl;
	FormListCtrl.$inject = ['FormService','$location'];

	function FormListCtrl(FormService,$location) {
		var vm = this;

		vm.forms = FormService.forms;
		vm.new_form = {};
		vm.createForm = createForm;
		vm.editForm = editForm;

		function createForm(title) {
			vm.new_form.title = title;
			vm.new_form.fields = [];
			FormService.createForm(vm.new_form);
			vm.new_form = {};
		}

		function editForm(form) {
			var idx = vm.forms.indexOf(form);
			$location.path('/edit/' + idx);
		}
	}

})();