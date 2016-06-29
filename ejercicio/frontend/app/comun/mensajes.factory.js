'use strict';

(function() {
	angular
		.module('tienda.comun')
		.factory('MensajeFactory', MensajeFactory);

	function MensajeFactory() {
		
		function Mensajes() {
			this.error = [];
			this.success = [];
		}
		
		return Mensajes;
	}

})();