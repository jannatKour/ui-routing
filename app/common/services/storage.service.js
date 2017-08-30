(function(){
  'use strict';

  angular
    .module('myApp')
    .factory('storageService', storageService);

  function storageService(){
    var ActiveState,
        Name;

    return{
      setActiveState : setActiveState,
      setName : setName,
      getActiveState : getActiveState,
      getName : getName
    };

    function setActiveState(stateName){
      if((!angular.isUndefined(stateName)) || (stateName !== null)){
        sessionStorage.setItem('ActiveState', stateName);
      }
    }

    function setName(name){
      if((!angular.isUndefined(name)) || (name !== null)){
        sessionStorage.setItem('Name', name);
      }
    }

    function getName(){
      return sessionStorage.getItem('Name');
    }

    function getActiveState(){
      return sessionStorage.getItem('ActiveState');
    }
  }
})();