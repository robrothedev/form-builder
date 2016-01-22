(function() {
	
	'use strict';

	module.exports = formBuilderFields;

	function formBuilderFields() {
	    var directive = {
	    	restrict: 'E',
	    	templateUrl: 'app/components/form_builder/html/form-builder-fields.html',
	    	scope: {
	    		form: '=',
	    		dragStop: '&'
	    	},
	    	link: link
	    };

	    return directive;

	    function link(scope,element) {
	    	element.sortable({
                handle:'.fa-bars',
                stop: function(event,ui) {
                    var data = $(this).sortable('toArray');
                    scope.dragStop()(data);
                }
            });
	    }
	}

})();