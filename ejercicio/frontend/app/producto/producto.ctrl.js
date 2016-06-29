'use strict';

(function() {
	angular
		.module('tienda.producto')
		.controller('ProductoCtrl', [ '$scope', 
			'ProductoService', 'MensajesFactory', ProductoCtrl ]);

	function ProductoCtrl($scope, productoService, Mensajes) {
		var init = function() {
			productoService.obtenerTodos(function(resp) {
				$scope.productos = resp.data;
			});
		};

		init();

		$scope.guardar = function(form) {
			$scope.mensajes = new Mensajes();

			if (form.nombre.$invalid)
				$scope.mensajes.error.push( 'Nombre inválido');
			if (form.precio.$invalid ||
				$scope.producto.precio <= 0)
				$scope.mensajes.error.push('Precio inválido');

			if ($scope.mensajes.error.length == 0) {
				var success = function() {
					$scope.mensajes.success.push('Producto agregado');
					$scope.producto = {};
					init();					
				};

				var error = function(resp) {
					//var mensaje = resp.data;
					$scope.mensajes.error.push('Error al agregar');
				}

				if ($scope.producto.id)
					productoService
						.modificar($scope.producto, success, error);
				else
					productoService
						.agregar($scope.producto, success, error);
			}
		};
	
		$scope.eliminar = function(p) {
			productoService.eliminar(p.id, init);
		};

		$scope.mostrar = function(p) {
			$scope.producto = p;
		}
	}

})();