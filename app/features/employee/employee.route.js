(function(){
  'use strict';

  angular
    .module('myApp.employee')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){

    $urlRouterProvider
      .when('/employee', '/employee/home');

    $stateProvider
      .state('employee', {
      url: '/employee',
      templateUrl: 'app/features/employee/employee-main.tpl.html',
      controller: 'EmployeeController as empCtrl'  
    })

      .state('employeeHome', {
      url:'/home',
      parent: 'employee',
      templateUrl: 'app/features/employee/employee-home.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('delivery', { 
      url:'/delivery',
      parent: 'employee',
      abstract: 'true',
      templateUrl: 'app/features/employee/employee-delivery.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('bd', {
      url: '/bd',
      parent: 'employee',
      templateUrl: 'app/features/employee/employee-bd.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('it', {
      url: '/it',
      parent: 'employee',
      templateUrl: 'app/features/employee/employee-it.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('ui', {
      url: '/ui',
      parent: 'delivery',
      templateUrl: 'app/features/employee/employee.delivery/delivery-uiteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('serversideteam', {
      url: '/serversideteam',
      parent: 'delivery',
      templateUrl: 'app/features/employee/employee.delivery/delivery-serversideteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('dbteam', {
      url: '/dbteam',
      parent: 'delivery',
      templateUrl: 'app/features/employee/employee.delivery/delivery-dbteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('qateam', {
      url: '/qateam',
      parent: 'delivery',
      templateUrl: 'app/features/employee/employee.delivery/delivery-qateam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    });

  }
})();