(function(){
  'use strict';

  angular.module('fitness')
  .factory('Day', ['$http', function($http){


    function create(day){
      return $http.post('/days', day);
    }

    function all(){
      return $http.get('/days');
    }

    return {create:create, all:all};
  }]);
})();
