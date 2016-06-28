'use strict';

var closure = function() {

	// Declare app level module which depends on views, and components
	angular.module('tienda', [
	  'ngRoute',
	  'ngBootbox',

	  'tienda.producto',
	  'tienda.compra'
	]).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  $locationProvider.hashPrefix('!');

	  $routeProvider.otherwise({redirectTo: '/catalogo'});
	}]);

};

closure();
