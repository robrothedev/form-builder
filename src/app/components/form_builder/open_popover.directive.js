(function() {

	'use strict';
	
	module.exports = openPopover;

	function openPopover() {
	    return {
	        restrict:'A',
	        link: function(scope,element,attr) {
	            element.on('click',function() {
	                $('.popover').each(function(index) {
	                	var idx = $('#' + $(element).attr('id'));
	                });
	            });
	        }
	    }
	 }



})();