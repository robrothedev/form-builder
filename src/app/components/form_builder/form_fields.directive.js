(function() {
	
	'use strict';

	module.exports = formFields;

	function formFields() {
	    var directive = {
	    	restrict: 'E',
	    	templateUrl: 'app/components/form_builder/html/form-fields.html',
	    	scope: {
	    		fields: '=',
	    	}
	    };

	    return directive;
	}

})();