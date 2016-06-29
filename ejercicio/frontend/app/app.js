'use strict';

var closure = function() {

	// Declare app level module which depends on views, and components
	angular.module('tienda', [
	  // vendor
	  'ui.router',
	  'ngBootbox',	
	  'ngStorage',
	  'chart.js',

	  // app
	  'tienda.producto',
	  'tienda.compra',
	  'tienda.comun'
	]).
	config(['$urlRouterProvider', function($urlRouterProvider, $locationProvider) {
	  $urlRouterProvider.otherwise("/catalog");
	  // $locationProvider.html5Mode(true);
	}]);

};

closure();
