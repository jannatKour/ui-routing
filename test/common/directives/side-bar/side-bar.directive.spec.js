'use strict';

describe('unit: side-bar directive', function(){
  
  var $compile,
      $rootScope;
  
  beforeEach(module('myApp'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  
  it('Replaces the element with appropriate content', function(){
    var element = $compile('<sidemenu></sidemenu>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toBeDefined();
  });
});
