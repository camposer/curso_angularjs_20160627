'use strict';

(function() {
	angular
		.module('tienda.compra')
		.controller('CatalogoCtrl', [ '$scope', '$rootScope', 'ProductoService', CatalogoCtrl ]);

	function CatalogoCtrl($scope, $rootScope, productoService) {
		var init = function() {
			productoService.obtenerTodos(function(resp) {
				$scope.productos = resp.data;
			});
		};

		init();

		$scope.aceptar = function() {
			$scope.mensajes = {
				error: [],
				success: []
			};

			var productosCarrito = [];
			for (var i in $scope.productos) {
				var prod = $scope.productos[i];

				if (prod.cantidad && ( 
						!angular.isNumber(prod.cantidad) ||
						prod.cantidad < 0)) {

					$scope.mensajes.error.push('Cantidad inválida');
					break;
				}
				else if (prod.cantidad) {
					productosCarrito.push({
						nombre: prod.nombre,
						precio: prod.precio,
						cantidad: prod.cantidad
					});
				}
			}

			if ($scope.mensajes.error.length == 0) {
				// FIXME Contar repetidos y sumar
				$rootScope.carrito = productosCarrito;
			}
		};
	}
	
})();