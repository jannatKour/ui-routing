(function(){
  'use strict';

  angular
    .module('myApp.administrator')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){
    
    $urlRouterProvider
      .when('/administrator', '/administrator/home');

    $stateProvider
      .state('administrator', {
      url: '/administrator',
      templateUrl: 'app/features/administrator/administrator-main.tpl.html',
      controller: 'AdministratorController as adminCtrl'  
    })

      .state('home', {
      url:'/home',
      parent: 'administrator',
      templateUrl: 'app/features/administrator/administrator-home.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('announcements', { 
      url:'/announcements',
      parent: 'administrator',
      templateUrl: 'app/features/administrator/administrator-announcements.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('settings', {
      url: '/settings',
      parent: 'administrator',
      abstract: 'true',
      templateUrl: 'app/features/administrator/administrator-settings.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('users', {
      url: '/users',
      parent: 'settings',
      templateUrl: 'app/features/administrator/administrator.settings/settings-users.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('department', {
      url: '/department',
      parent: 'settings',
      templateUrl: 'app/features/administrator/administrator.settings/settings-department.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('projects', {
      url: '/projects',
      parent: 'settings',
      templateUrl: 'app/features/administrator/administrator.settings/settings-projects.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('clients', {
      url: '/clients',
      parent: 'settings',
      templateUrl: 'app/features/administrator/administrator.settings/settings-clients.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    });

  }
})();