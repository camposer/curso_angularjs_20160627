'use strict';

(function() {
	angular
		.module('tienda.compra', [ ])
		.config([ '$stateProvider', function($stateProvider) {
			$stateProvider.state('catalogo', {
				url: '/catalog',
				templateUrl: 'compra/catalogo.html',
				controller: 'CatalogoCtrl'
			});

			$stateProvider.state('carrito', {
				url: '/shopping-car',
				templateUrl: 'compra/carrito.html',
				controller: 'CarritoCtrl'
			});

			$stateProvider.state('reporte', {
				url: '/report',
				templateUrl: 'compra/reporte.html',
				controller: 'ReporteCtrl'
			});
		}]);
})();