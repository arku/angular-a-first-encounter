(function() {
  'use strict';

  angular.module('RestaurantMenuSearch', [])
    .controller('MainController', MainController);

  function MainController() {
    var ctrl = this;

    ctrl.searchDesc = "";
    ctrl.searchMenu = function() {
      // TODO: Fetch data from the server
    }
  }

}());