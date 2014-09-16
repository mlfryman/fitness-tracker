(function(){
  'use strict';

  angular.module('fitness', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'LoginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'LogoutCtrl'})
    .when('/noms', {templateUrl:'/views/noms/noms.html', controller:'NomsCtrl'})
    .when('/burns', {templateUrl:'/views/burns/burns.html', controller:'BurnsCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'fitness', storeName:'cache', version:1.0});
  }]);
})();

