(function(){
  'use strict';
  
  angular.module('NameAsciiApp', [])
  
    .controller('MainController', function($scope){
      $scope.name = "";
      $scope.value = 0;
      $scope.calculate = function () {
        $scope.value = computeValue($scope.name);          
      };
      
      var computeValue = function(name) {
        var asciiScore = 0;
        for(var idx = 0; idx < name.length; idx++) {
          asciiScore += name.charCodeAt(idx);
        }
        return asciiScore;
      }
    });
}());
