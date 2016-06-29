'use strict';

(function() {
	angular
		.module('tienda.producto')
		.service('ProductoService', ['BASE_URL', '$http', ProductoService]);

	function ProductoService(BASE_URL, $http) {
		var url = BASE_URL + '/productos';

		this.obtenerTodos = function(callback) {
			return $http.get(url).then(callback);
		};

		this.agregar = function(producto, success, error) {
			return $http.post(url, producto)
				.then(success, error);
		};

		this.modificar = function(producto, success, error) {
			return $http.put(url + '/' + producto.id, producto)
				.then(success, error);
		};

		this.eliminar = function(id, success, error) {
			return $http.delete(url + '/' + id)
				.then(success, error);
		}
	}

})();