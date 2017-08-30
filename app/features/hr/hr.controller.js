(function(){
  'use strict';

  angular
    .module('myApp.hr')
    .controller('HrController', HrController);

  HrController.$inject = [];

  function HrController(){
    var vm = this;

    vm.tabs = [
      {
        name : 'Home',
        url : 'hrHome',
      },
      {
        name : 'Recruitment',
        url : 'recruitment'
      },
      {
        name : 'Finance',
        url : 'finance'
      },
      {
        name : 'Admin',
        url : 'admin'
      }];
  }
})();