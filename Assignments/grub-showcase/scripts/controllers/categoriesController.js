(function() {
  'use strict';

  angular.module('GrubShowcase')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories', '$rootScope'];
  function CategoriesController(categories, $rootScope) {
    var categoriesCtrl = this;
    categoriesCtrl.categories = categories;
  }

}());