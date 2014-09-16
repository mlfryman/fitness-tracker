(function(){
  'use strict';

  angular.module('fitness')
  .factory('Home', ['$http', function($http){

    function getMessage(){
      return $http.get('/home');
    }

    return {getMessage:getMessage};
  }]);
})();

