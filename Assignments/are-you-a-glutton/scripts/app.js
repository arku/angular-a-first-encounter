(function() {
  'use strict';
  
  angular.module('DietAdviserApp', [])
    .controller('MainController', mainController);
    
    mainController.$inject = ['$scope'];

    function mainController($scope) {
      $scope.menu = "Chicken, Fish and Ri";
      
      $scope.check = function() {
        console.log(count($scope.menu));
      }
    }
    
    var count = function(menu) {
      // Remove the spaces in the user's menu
      var items = menu.replace(/\s+/g, '');
      return (items.length > 0) ? items.split(',').length : 0;
    }
}());
