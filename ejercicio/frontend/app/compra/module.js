'use strict';

(function() {
	angular
		.module('tienda.compra', [ ])
		.config([ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/catalogo', {
				templateUrl: 'compra/catalogo.html',
				controller: 'CatalogoCtrl'
			});

			$routeProvider.when('/carrito', {
				templateUrl: 'compra/carrito.html',
				controller: 'CarritoCtrl'
			});

		}]);
})();