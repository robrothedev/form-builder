(function() {

	'use strict';
	
	module.exports = openPopover;
	module.exports = closePopover;

	function openPopover() {
	    return {
	        restrict:'A',
	        link: function(scope,element,attr) {
	            element.on('click',function() {
	                $('.popover').each(function() {
	                    $(this).hide();
	                });
	            });
	        }
	    }
	 }

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