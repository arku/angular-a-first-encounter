(function() {
  'use strict';

  angular.module('GrubShowcase')
    .component('menuItem', {
      templateUrl: 'views/menu_item.html',
      bindings: {
        item: '<'
      }
    })
}());