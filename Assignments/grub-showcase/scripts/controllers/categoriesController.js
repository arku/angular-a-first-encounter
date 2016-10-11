(function() {
  'use strict';

  angular.module('GrubShowcase')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories', '$rootScope'];
  function CategoriesController(categories, $rootScope) {

    var categoriesCtrl = this;
    var events = [];

    categoriesCtrl.categories = categories;
    console.log(categoriesCtrl.categories);

    categoriesCtrl.$onInit = function() {
      var event = $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
          console.log('State transition started');
        });
    };

  }

}());