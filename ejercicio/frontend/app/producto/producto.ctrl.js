'use strict';

(function() {
	angular
		.module('tienda.producto')
		.controller('ProductoCtrl', [ '$scope', ProductoCtrl ]);

	function ProductoCtrl($scope) {
		var modificar = false;

		$scope.productos = [
			{
				nombre: 'TV',
				precio: 700
			},
			{
				nombre: 'Cámara',
				precio: 400
			},
			{
				nombre: 'PS4',
				precio: 350
			}
		];

		$scope.guardar = function(form) {
			$scope.mensajes = {
				error: [],
				success: []
			};

			if (form.nombre.$invalid)
				$scope.mensajes.error.push( 'Nombre inválido');
			if (form.precio.$invalid ||
				$scope.producto.precio <= 0)
				$scope.mensajes.error.push('Precio inválido');

			if ($scope.mensajes.error.length == 0) {
				if (modificar)
					$scope.$apply();
				else
					$scope.productos.push(producto);

				$scope.mensajes.success.push('Producto agregado');
				$scope.producto = {};
			}
		};
	
		$scope.eliminar = function(p) {
			var idx = $scope.productos.indexOf(p);
			$scope.productos.splice(idx, 1);
		};

		$scope.mostrar = function(p) {
			$scope.producto = p;
			modificar = true;
		}
	}

})();