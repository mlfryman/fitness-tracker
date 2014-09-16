(function(){
  'use strict';

  angular.module('fitness')
  .factory('Nom', ['$http', function($http){

    function create(nom){
      return $http.post('/noms', nom);
    }

    function all(){
      return $http.get('/noms');
    }

    return {create:create, all:all};
  }]);
})();

