(function(){
  'use strict';
  
  angular
    .module('myApp')
    .directive('menu', menu);
  
  function menu(){
    return{
      scope: {
        items: '=' 
      },
      templateUrl: 'app/common/directives/menu-bar/menu-bar.tpl.html',
//      controller: 'MenuController',
//      controllerAs: 'menuCtrl'
    };
  }
})();