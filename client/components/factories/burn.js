(function(){
  'use strict';

  angular.module('fitness')
  .factory('Burn', ['$http', function($http){

    function all(){
      return $http.get('/burns');
    }

    return {all:all};
  }]);
})();

