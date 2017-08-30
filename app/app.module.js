(function(){
  'use strict';

  angular
    .module('myApp', [
    'ui.router',
    
    //employee module
    'myApp.employee',
    
    //hr module
    'myApp.hr',
    
    //administrator module
    'myApp.administrator'
  ])
    .config(appConfig);
  
  appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  
  function appConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('', '/employee/home');
  }
})();