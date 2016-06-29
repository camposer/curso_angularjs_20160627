'use strict';

(function() {

	angular
		.module('tienda.producto', [ ])
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider.state('producto', {
				url: '/product',
				templateUrl: 'producto/index.html',
				controller: 'ProductoCtrl'
			});
		}]);


})();