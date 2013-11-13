'use strict';

/* Controllers */

var emergenciasApp = angular.module('emergenciasApp', ['mongolabResource']);

emergenciasApp.constant('API_KEY', '1CrbVfw7cBn4lsZHdu4REj0mY6lW7dbp');
emergenciasApp.constant('DB_NAME', 'emergencias');

emergenciasApp.factory('Evento', function($mongolabResource){
  return $mongolabResource('eventos');
});

emergenciasApp.controller('EventosListCtrl', function EventosListCtrl($scope, $http, Evento) {
/*
  $scope.eventos = [
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
 */
  $scope.eventos = Evento.query({_id:''});

  $scope.guardarEmergencia = function(tipo, descripcion){
//    $scope.emergencias.push({'tipo':tipo, 'descripcion':descripcion});
    $.ajax({ url:'https://api.mongolab.com/api/1/databases/emergencias/collections/eventos/'+
        '?apiKey=1CrbVfw7cBn4lsZHdu4REj0mY6lW7dbp',
        data: JSON.stringify({'tipo':tipo, 'descripcion':descripcion}),
        type:"POST",
        contentType: "application/json"
      }).success(function (data, status, header, config){
        console.log("ingreso");
      }).error( function (data, status, headers, config) {
        console.log("pailas");
      });

  }

  $scope.getEventos = function (){
    $http.get('https://api.mongolab.com/api/1/databases/emergencias/collections/eventos/'+
      '?apiKey=1CrbVfw7cBn4lsZHdu4REj0mY6lW7dbp'
    ).success(function(data,status){
      console.log(data);
    }).error(function(data, status){
      console.log(status);
    });
  }

});
