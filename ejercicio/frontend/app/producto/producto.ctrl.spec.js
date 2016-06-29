'use strict';

describe('ProductoCtrl unit test', function () {
  var controller,
    indexCtrl,
    scope,
    productoServiceDummy,
    Mensajes;

  beforeEach(module('tienda'));

  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();

    controller = $controller;
    // En lugar de implementar un dummy de ProductoService, pudimos
    // inyectar el $httpBackend y dar respuesta (estática) a cada una de las peticiones
    // angular inyecta el $httpBackend en lugar del $http de forma automática
    productoServiceDummy = $injector.get('ProductoServiceDummy');
    Mensajes = $injector.get('MensajesFactory');

    productoServiceDummy.agregar({
        id: 1,
        nombre: 'uno',
        precio: 1
      });
    productoServiceDummy.agregar({
        id: 2,
        nombre: 'dos',
        precio: 2
      });
    productoServiceDummy.agregar({
        id: 3,
        nombre: 'tres',
        precio: 3
      });

    indexCtrl = $controller('ProductoCtrl', {
      $scope: scope,
      ProductoService: productoServiceDummy,
      Mensajes: Mensajes
    });

    scope.$digest(); // Obliga la actualización del scope a partir de las promesas pendientes por ejecución
  }));

  it('Cuando se inicia el controller entonces hay productos', function () {
    console.log('productos = ' + JSON.stringify(scope.productos));
    expect(scope.productos.length).toEqual(3);
  });

  it('Cuando agrego entonces...', function () {
    var form = { nombre: {}, precio: {} };
    scope.producto = {
      nombre: 'na',
      precio: 2
    };

    var tamanioInicial = scope.productos.length;

    scope.guardar(form);
    scope.$digest();

    expect(scope.mensajes.success.length).toBeGreaterThan(0);
    expect(scope.producto).toEqual({});
    expect(scope.productos.length).toBe(tamanioInicial + 1);
  });

});
