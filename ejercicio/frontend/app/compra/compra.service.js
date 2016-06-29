'use strict';

(function() {
	angular
		.module('tienda.compra')
		.service('CompraService', [ 'BASE_URL', '$http', CompraService ]);

	function CompraService(BASE_URL, $http) {
		var url = BASE_URL + '/compras';

		this.comprar = function(producto, success, error) {
			return $http.post(url, producto);
		};

		this.obtenerCompras = function(success, error) {
			return $http.get(url)
				.then(success, error);
		};
	}

})();