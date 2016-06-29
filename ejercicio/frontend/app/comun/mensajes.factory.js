'use strict';

(function() {
	angular
		.module('tienda.comun')
		.factory('MensajesFactory', MensajesFactory);

	function MensajesFactory() {
		
		function Mensajes() {
			this.error = [];
			this.success = [];
		}
		
		return Mensajes;
	}

})();