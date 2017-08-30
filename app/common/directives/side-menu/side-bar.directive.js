(function(){
  'use strict';
  
  angular
    .module('myApp')
    .directive('sidemenu', sidemenu);
  
  function sidemenu(){
    return{
      scope: {
        items : '='  
      },
      templateUrl: 'app/common/directives/side-menu/side-menu.tpl.html',
      controller: 'SideBarController',
      controllerAs: 'sideCtrl'
    };
  }
})();