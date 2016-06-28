'use strict';

(function() {
	angular
		.module('tienda.compra')
		.controller('CarritoCtrl', [ '$scope', 'CarritoService', CarritoCtrl ]);

	function CarritoCtrl($scope, carritoService) {
		var init = function() {
			$scope.carrito = carritoService.obtener();
		};

		init();
	}
	
})();