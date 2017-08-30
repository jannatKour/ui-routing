(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('SideBarController', SideBarController);

  SideBarController.$inject = ['storageService', '$scope', '$state'];

  function SideBarController(storageService, $scope, $state){
    var sideCtrl = this,
        temp;

//    sideCtrl.setInitialState = function(items){
//      sideCtrl.activeMenu = items[0].url;
//    };
    
    function getState(){  
      temp = storageService.getActiveState();
      if(temp === null){
//        menuCtrl.activeMenu = $scope.items[0].name;
        sideCtrl.setActiveState($scope.items[0].url);
      } else {
        $state.go(temp);
      }     
    }
    getState();
    
    sideCtrl.setActiveState = function(stateName){
      sideCtrl.activeMenu = stateName;  
      storageService.setActiveState(sideCtrl.activeMenu);
    };
  }
})();