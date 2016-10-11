(function() {
  'use strict';

  angular.module('GrubShowcase')
    .service('RestaurantMenuService', RestaurantMenuService)
    .constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');

  RestaurantMenuService.$inject = ['$http', 'ApiBaseUrl'];
  function RestaurantMenuService($http, ApiBaseUrl) {
    var service = this;

    this.getCategories = function() {
      return $http({
        url: ApiBaseUrl + '/categories.json'
      });
    };
  }

}());