'use strict';

(function() {
	angular
		.module('tienda.compra')
		.controller('ReporteCtrl', [ '$scope', 'CompraService', ReporteCtrl ]);

	function ReporteCtrl($scope, compraService) {
		var init = function() {
			compraService.obtenerCompras(function(resp) {
				$scope.labels = [];
				$scope.data = [];

				for (var i in resp.data) {
					var compra = resp.data[i];
					$scope.labels.push(compra.nombre);
					$scope.data.push(compra.cantidad);
				}
			});			
		}

		init();
	}

})();