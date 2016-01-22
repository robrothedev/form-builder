(function() {
	
	'use strict';

	module.exports = fieldToolbar;
	fieldToolbar.$inject = ['FormService'];

	function fieldToolbar(FormService) {
	    var directive = {
	        restrict: 'E',
	        templateUrl: 'app/components/form_builder/html/field-toolbar.html',
	        link: link,
	        scope: {
	        	field: '='
	        }
	    };

	    return directive;

	    function link(scope,element) {
	    	var form = scope.$parent.form;

	    	scope.popover_template = 'app/components/form_builder/html/popover-options.html';

	    	scope.addOption = function(field) {
	    		var num = field.options.length + 1;
            	field.options.push({id:'',label:'Radio ' + num});
	    	};

	    	scope.removeOption = function(field,option) {
	    		var idx = field.options.indexOf(option);
            	field.options.splice(idx,1);
	    	};

	    	scope.removeField = function() {
	    		FormService.removeField(form,scope.field);
	    	};
	    }
	}

})();