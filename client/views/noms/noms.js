(function(){
  'use strict';

  angular.module('fitness')
  .controller('NomsCtrl', ['$scope', 'Nom', function($scope, Nom){
    $scope.nom = {};
    $scope.noms = [];

    Nom.all().then(function(response){
      $scope.noms = response.data.noms;
    });

    $scope.addNom = function(){
      Nom.create($scope.nom).then(function(response){
        $scope.noms.push(response.data.noms);
        $scope.nom = {};
      });
    };
  }]);
})();

