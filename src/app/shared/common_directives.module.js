(function() {

	'use strict';

	angular
		.module('app.commonDirectives',[])
		.directive('alertError',alertError)
		.directive('alertSuccess',alertSuccess)
		.directive('alertWarning',alertWarning)
		.directive('spinner',spinner)
		.directive('fa',fontAwesome)
		.directive('resolveLoader',resolveLoader)
		.directive('inputMask',inputMask);

	resolveLoader.$inject = ['$rootScope','$timeout'];

	// ---------------------------------

	function alertError() {
		return {
			restrict: 'E',
			transclude: true,
			template: '<div class="alert alert-danger"><fa icon="{{icon}}"></fa> <strong>{{message}}</strong><span ng-transclude></span></div>',
			scope: {
				message: '@message',
				icon: '@icon'
			}
		};
	}

	function alertSuccess() {
		return {
			restrict: 'E',
			transclude: true,
			template: '<div class="alert alert-danger"><fa icon="{{icon}}"></fa> <strong>{{message}}</strong><span ng-transclude></span></div>',
			scope: {
				message: '@message',
				icon: '@icon'
			}
		};
	}

	function alertWarning() {
		return {
			restrict: 'E',
			transclude: true,
			template: '<div class="alert alert-warning"><fa icon="{{icon}}"></fa> <strong>{{message}}</strong><span ng-transclude></span></div>',
			scope: {
				message: '@message',
				icon: '@icon'
			}
		};
	}

	function spinner() {
		return {
			template: '<span class="fa fa-spinner fa-pulse fa-4x"></span>'
		};
	}

	function fontAwesome() {
		return {
			restrict:'E',
			template: '<span class="fa fa-{{icon}}"></span>',
			scope: {
				icon: '@icon'
			}
		};
	}

	function resolveLoader($rootScope, $timeout) {
		var directive = {
			restrict: 'E',
			replace: true,
			template: '<div class="text-center"><span class="fa fa-spin fa-circle-o-notch"></span> <strong>Loading...</strong></div>',
			link: link,
			scope: {
				loader: '@loader'
			}
		};

		return directive;

		function link(scope,element) {
			if (!scope.loader) {
				$rootScope.$on('$stateChangeStart', function(event, currentRoute, previousRoute) {
					if (previousRoute) return;

					$timeout(function() {
						element.removeClass('ng-hide');
					});
				});

				$rootScope.$on('$stateChangeSuccess', function() {
					element.addClass('ng-hide');
				});
			}
		}
	}

	function inputMask() {
		var directive = {
			restrict: 'A',
			link: link,
			scope: {
				inputMask: '@inputMask'
			}
		};

		return directive;

		function link(scope,element) {
		 	element.inputmask(scope.inputMask);
		}
	}

})();