'use strict';

/* Controllers */

var emergenciasApp = angular.module('emergenciasApp', []);

emergenciasApp.controller('EmergenciasListCtrl', function EmergenciasListCtrl($scope) {
  $scope.emergencias = [
    {'tipo': 'Incendio',
     'descripcion': 'Quema de bosques.',
    },
    {'tipo': 'Rescate',
     'descripcion': 'rescate en deslizamiento.',
    },
    {'tipo': 'Ahogamiento™',
     'descripcion': 'En el río.',
    }
  ];

  $scope.guardarEmergencia = function(tipo, descripcion){
    $scope.emergencias.push({'tipo':tipo, 'descripcion':descripcion});
  }
});
