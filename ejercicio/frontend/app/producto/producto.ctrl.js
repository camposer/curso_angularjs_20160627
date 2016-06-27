'use strict';

(function() {
	angular
		.module('tienda.producto')
		.controller('ProductoCtrl', [ '$scope', ProductoCtrl ]);

	function ProductoCtrl($scope) {
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
	}

})();