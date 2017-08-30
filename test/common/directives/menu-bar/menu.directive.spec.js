'use strict';

describe('unit : menu directive', function(){
 
  var $compile,
      $rootScope;
  
  beforeEach(module('myApp'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  
  it('Replaces the element with appropriate content', function(){
    var element = $compile('<menu></menu>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toBeDefined();
  });
});