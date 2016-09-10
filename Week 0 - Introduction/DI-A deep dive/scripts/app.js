(function(){

  'use strict';
  angular.module('Injector', [])
    .controller('BaseController', controllerFunc);
    
    controllerFunc.$inject = ['$scope', '$filter', '$injector'];

    function controllerFunc($scope, $filter, $injector) {
      $scope.name = "Arun";
      $scope.upper = upper;
      
      /**
        $scope, $filter and $injector are all services
        The below line is used by Angular to infer the services required by a controller and to inject the right service at the right spot
        This does not work when code is minified of obfuscated as argument names get changed. For more, see https://docs.angularjs.org/api/auto/service/$injector
      **/
      var services = $injector.annotate(controllerFunc);
      console.log(services);
      
      function upper() {
        var upperCase = $filter('uppercase');
        $scope.name = upperCase($scope.name);
      }
    }
}());
