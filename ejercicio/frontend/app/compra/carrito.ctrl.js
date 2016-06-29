'use strict';

(function() {
	angular
		.module('tienda.compra')
		.controller('CarritoCtrl', [ '$scope', 'CarritoService', 'CompraService', CarritoCtrl ]);

	function CarritoCtrl($scope, carritoService, compraService) {
		var init = function() {
			$scope.carrito = carritoService.obtener();
		};

		init();

		$scope.comprar = function() {
			// TODO Manejar cola de eventos asíncronos
			// var defer = $q.defer();
			// var promises = [];

			for (var i in $scope.carrito.productos) {
				var prod = $scope.carrito.productos[i];
				promises.push(compraService.comprar({
					productoId: prod.id,
					nombre: prod.nombre,
					cantidad: prod.cantidad
				}));
			}

			// defer.resolve();

			// defer.then(function() {
			// 	carritoService.limpiar();
			// });
		};

	}
	
})();