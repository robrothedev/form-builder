(function() {

	'use strict';
	
	module.exports = closePopover;

	function closePopover() {
	    return {
	        restrict:'A',
	        link: function(scope,element,attr) {
	            element.on('click',function() {
	                $('.popover').hide();
	            });
	        }
	    }
	}

})();