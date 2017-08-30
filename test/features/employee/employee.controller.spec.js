'use strict';
describe('unit: Employee Controller', function(){
  var empCtrl;
  
  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function(_$controller_){
    empCtrl = _$controller_('EmployeeController', {});
  }));

  it('checks if array is defined', function(){
    expect(empCtrl.tabs.length).toBeGreaterThan(0);
    expect(empCtrl.options.length).toBeGreaterThan(0);
  });
});

