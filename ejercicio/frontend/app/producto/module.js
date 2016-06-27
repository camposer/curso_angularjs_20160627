'use strict';

(function() {

	angular
		.module('tienda.producto', [ 'ngRoute' ])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/producto', {
				templateUrl: 'producto/index.html',
				controller: 'ProductoCtrl'
			});
		});


})();