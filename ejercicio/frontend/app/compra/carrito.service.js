'use strict';

(function() {
	angular
		.module('tienda.compra')
		.service('CarritoService', [ '$sessionStorage', CarritoService ]);

	function CarritoService($sessionStorage) {
		this.agregar = function(productos) {
			var carrito = {};

			// FIXME Hacer que esto sea incrementable
			var total = 0;
			for (var i in productos) {
				productos[i].total = 
					productos[i].cantidad * productos[i].precio;
				total += productos[i].total
			}

			$sessionStorage.carrito = {
				productos: productos,
				total: total
			};
		};

		this.obtener = function() {
			return $sessionStorage.carrito;
		};

		this.limpiar = function() {
			$sessionStorage.carrito = null;
		};
	}

})();