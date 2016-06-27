'use strict';

(function() {
	angular
		.module('tienda.producto')
		.service('ProductoService', ['BASE_URL', '$http', ProductoService]);

	function ProductoService(BASE_URL, $http) {
		this.obtenerTodos = function(success) {
			var promise = $http.get(BASE_URL);
			promise.then(success);
			promise.then(function() {
				console.log('Datos cargados');
			});
			promise.finally(function() {
				console.log('Finalize');
			});
			return promise;
		};
	}

})();