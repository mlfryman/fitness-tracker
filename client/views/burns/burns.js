(function(){
  'use strict';

  angular.module('fitness')
  .controller('BurnsCtrl', ['$scope', 'Burn', function($scope, Burn){
    $scope.burns = [];

    Burn.all().then(function(response){
      $scope.burns = response.data.burns;
    });
  }]);
})();

