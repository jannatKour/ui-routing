'use strict';
describe('Unit : Administrator Controller', function(){
  var adminCtrl;
  
  beforeEach(module('myApp'));
 
  beforeEach(inject(function(_$controller_){
    adminCtrl = _$controller_('AdministratorController', {});
  }));
  
 it('checks if array is defined', function(){
    expect(adminCtrl.tabs.length).toBeGreaterThan(0);
    expect(adminCtrl.options.length).toBeGreaterThan(0);
  });
});