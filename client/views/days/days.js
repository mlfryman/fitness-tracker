(function(){
  'use strict';

  angular.module('fitness')
  .controller('DaysCtrl', ['$scope', 'Day', function($scope, Day){
    $scope.day = {};
    $scope.days = [];

    $scope.toggleDay = function(){
      $scope.hideDay = !!!$scope.hideDay;
    };

    $scope.addDay = function(){
      $scope.days.push($scope.day);
      $scope.day = {};
    };

  }]);
})();
