(function(){
  'use strict';
  
  angular.module('NameAsciiApp', [])
  
    .controller('MainController', function($scope){
      $scope.name = "";
      $scope.calculate = function () {
        $scope.value = 0;
        for (var idx = 0; idx < $scope.name.length; idx++) {
          $scope.value += $scope.name.charCodeAt(idx);
        }
          
      };
      
    });
}());
