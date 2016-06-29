'use strict';

(function() {
	angular
		.module('tienda.comun')
		.directive('mensajes', mensajes);

	function mensajes() {
		return {
			restrict: 'E',
			templateUrl: 'comun/mensajes.html',
			scope: {
				mensajes: '=src'
			}
		};
	} 

})();