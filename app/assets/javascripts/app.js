angular
  .module('app', ['ui.router', 'devise', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     });