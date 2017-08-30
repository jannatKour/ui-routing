(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['storageService', '$scope', '$state'];

  function MenuController(storageService, $scope, $state){
    var menuCtrl = this;
    
    menuCtrl.activeMenu = 
    
    menuCtrl.setState = function(stateName){
      
    };
  }
})();
