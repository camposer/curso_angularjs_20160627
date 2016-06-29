'use strict';

(function() {
	angular
		.module('tienda.compra')
		.controller('CatalogoCtrl', [ '$scope', '$location', 'ProductoService', 'CarritoService', 'MensajesFactory', CatalogoCtrl ]);

	function CatalogoCtrl($scope, $location, productoService, carritoService, Mensajes) {
		var init = function() {
			productoService.obtenerTodos(function(resp) {
				$scope.productos = resp.data;
			});
		};

		init();

		$scope.aceptar = function() {
			$scope.mensajes = new Mensajes();

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
						id: prod.id,
						nombre: prod.nombre,
						precio: prod.precio,
						cantidad: prod.cantidad
					});
				}
			}

			if ($scope.mensajes.error.length == 0) {
				carritoService.agregar(productosCarrito);
				$location.path('/carrito');
			}
		};
	}
	
})();