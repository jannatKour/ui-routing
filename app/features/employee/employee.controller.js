(function(){
  'use strict';

  angular
    .module('myApp.employee')
    .controller('EmployeeController', EmployeeController);

  EmployeeController.$inject = ['storageService', '$state'];

  function EmployeeController(storageService, $state){
    var vm  = this,
        menuItems = null;

    vm.options = [
      { name: 'UI Team',
       
       url: 'ui'
      },
      {
        name: 'Server Side Team',
        url: 'serversideteam'                     
      },
      {
        name: 'DB Team',
        url: 'dbteam'
      },
      {
        name: 'QA Team',
        url: 'qateam'
      }];

    vm.tabs = [
      {
        name : 'Home',
        url : 'employeeHome'
      },
      {
        name : 'Delivery',
        url : 'ui'
      },
      {
        name : 'Business Development',
        url : 'bd'
      },
      {
        name : 'IT Support',
        url : 'it'
      }
    ];

    menuItems = (vm.tabs).length > 0 ? vm.tabs : undefined;

    var state;
    
    function getState(){  
      state = storageService.getActiveState();
      if(state === null && menuItems.length > 0){
        setActiveState(menuItems[0].url);
      } else {
        setActiveState(state);
      }     
    }
    getState();

    vm.setActiveState = setActiveState;
    function setActiveState(stateName){
      var i;
      vm.activeMenu = stateName;
      storageService.setActiveState(vm.activeMenu);
      if(menuItems !== undefined){
        for(i=0; i<menuItems.length; i++){
          if(stateName === menuItems[i].url){
            $state.go(stateName);
          }
        }
      }
    }
    
  }
})();