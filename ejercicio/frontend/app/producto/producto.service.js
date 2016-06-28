'use strict';

(function() {
	angular
		.module('tienda.producto')
		.service('ProductoService', ['BASE_URL', '$http', ProductoService]);

	function ProductoService(BASE_URL, $http) {
		this.obtenerTodos = function(callback) {
			return $http.get(BASE_URL).then(callback);
		};

		this.agregar = function(producto, success, error) {
			return $http.post(BASE_URL, producto)
				.then(success, error);
		};

		this.modificar = function(producto, success, error) {
			return $http.put(BASE_URL + '/' + producto.id, producto)
				.then(success, error);
		};

		this.eliminar = function(id, success, error) {
			return $http.delete(BASE_URL + '/' + id)
				.then(success, error);
		}
	}

})();