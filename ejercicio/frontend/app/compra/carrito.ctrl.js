'use strict';

(function() {
	angular
		.module('tienda.compra')
		.controller('CarritoCtrl', [ '$scope', '$q', 'CarritoService', 'CompraService', CarritoCtrl ]);

	function CarritoCtrl($scope, $q, carritoService, compraService) {
		var init = function() {
			$scope.carrito = carritoService.obtener();
		};

		init();

		$scope.comprar = function() {
			var chain = $q.when();

			for (var i in $scope.carrito.productos) {
				var prod = $scope.carrito.productos[i];
				chain = chain.then(compraService.comprar({
					productoId: prod.id,
					nombre: prod.nombre,
					cantidad: prod.cantidad
				}));
			}

			chain.then(function() {
			 	carritoService.limpiar();
			 	init();
			});
		};

	}
	
})();