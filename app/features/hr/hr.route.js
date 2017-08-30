(function(){
  'use strict';

  angular
    .module('myApp.hr')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('/hr', '/hr/home')
      .otherwise('/hr/home');

    $stateProvider
      .state('hr',{
      url: '/hr',
      templateUrl:'app/features/hr/hr-main.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('hrHome', {
      url: '/home',
      parent: 'hr',
      templateUrl: 'app/features/hr/hr-home.tpl.html',
      controller: 'HrController as hrCtrl'   
    })

      .state('recruitment', { 
      url:'/recruitment',
      parent: 'hr',
      templateUrl: 'app/features/hr/hr-recruitment.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('finance', {
      url: '/finance',
      parent: 'hr',
      templateUrl: 'app/features/hr/hr-finance.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('admin', {
      url: '/admin',
      parent: 'hr',
      templateUrl: 'app/features/hr/hr-admin.tpl.html',
      controller: 'HrController as hrCtrl'
    });

  }
})();