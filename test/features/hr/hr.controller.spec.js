'use strict';
describe('unit : hr controller', function(){
  var hrCtrl;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function(_$controller_){
    hrCtrl = _$controller_('HrController', {});
  }));

  it('checks if array is defined', function(){
    expect(hrCtrl.tabs.length).toBeGreaterThan(0);
  });
});
