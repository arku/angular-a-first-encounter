(function() {
  'use strict';
  
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', mainController);
    
    mainController.$inject = ['$scope'];

    function mainController($scope) {
      $scope.menu = "";
      $scope.message = "";
      
      $scope.check = function() {
        if ($scope.menu.length === 0 || count($scope.menu) === 0) {
          $scope.message = "Please enter data first";
          $scope.state = "error";
        }
        else {
          var itemsCount = count($scope.menu);
          $scope.message = ( itemsCount <= 3) ? "Enjoy!" : "Too much!";
          $scope.state = "success";
        }
      }
    }
    
    /**
    * Count the user's menu items
    **/
    var count = function(menu) {
      var menu = parseInput(menu);
      // Handling the case of ",,,"
      return (menu.length > 0) ? parseInput(menu).split(',').length : 0;
    }
    
    /**
    * Remove spaces in the string and replace mutiple consecutive commas with a single comma.
    * Also removes the commas at the end of the string
    **/
    var parseInput = function(menu) {
      // Remove the spaces first and then replace commas. Otherwise, a minor bug occurs for the
      // test case "Chicken, Fish,  Rice,     ,,,,,"
      
      return menu.replace(/\s+/g, '').replace(/,+$/g, '').replace(/,{2,}/g, ',');
    }
}());
