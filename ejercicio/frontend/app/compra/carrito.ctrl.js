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
			var promises = [];

			for (var i in $scope.carrito.productos) {
				var prod = $scope.carrito.productos[i];
				promises.push(compraService.comprar({
					productoId: prod.id,
					nombre: prod.nombre,
					cantidad: prod.cantidad
				}));
			}

			$q.all(promises).then(function() {
			 	carritoService.limpiar();
			 	init();
			});
		};

	}
	
})();