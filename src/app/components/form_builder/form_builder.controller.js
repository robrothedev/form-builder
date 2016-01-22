(function() {
	
	'use strict';

	module.exports = FormBuilderCtrl;
	FormBuilderCtrl.$inject = ['FormService','$stateParams','$timeout','$scope'];

	function FormBuilderCtrl(FormService,$stateParams,$timeout,$scope) {
		var vm = this;
		var formIdx = $stateParams.formIdx;

		// properties
		vm.form = FormService.getForm(formIdx);
		vm.field_types = FormService.field_types;

		// functions
		vm.addField = addField;
		vm.sortFields = sortFields;
		vm.saveForm = saveForm;
     
	    function addField(type) {
	        FormService.addField(vm.form,type);
	    }
	    
	    function addOption(field) {
	        FormService.addOption(field);
	    }
	    
	    function removeOption(field,option) {
	        FormService.removeOption(field,option);
	    }
	   
	    function sortFields(data) {
	    	var fields = FormService.sortFields(vm.form,data);

	    	$scope.$apply(function() {
	    		vm.form.fields = fields;
	    	});
	    }

	    function saveForm(title) {
	    	vm.error = false;
	    	vm.form.title = title;
	    	
	    	var results = FormService.saveForm(vm.form);

	    	if (results.has_error) {
	    		vm.error = angular.copy(results);
	    	}
	    	else {
	    		vm.saved = true;
	    		vm.save_fade = false;

	    		$timeout(function() {
	    			vm.save_fade = true;
	    		},2000);

	    		$timeout(function() {
	    			vm.saved = false;
	    		},2400);


	    	}
	    }
	}

})();