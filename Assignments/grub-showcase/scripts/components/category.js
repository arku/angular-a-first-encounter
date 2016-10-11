(function(){
  'use strict';

  angular.module('GrubShowcase')
    .component('categoryItem', {
      templateUrl: 'views/category.html',
      bindings: {
        'item': '<'
      }
    });
}());