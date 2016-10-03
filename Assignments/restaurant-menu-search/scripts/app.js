(function() {
  'use strict';

  angular.module('RestaurantMenuSearch', [])
    .controller('MainController', MainController)
    .service('SearchService', SearchService);

  MainController.$inject = ['SearchService'];
  function MainController(SearchService) {
    var ctrl = this;

    ctrl.searchDesc = "";
    ctrl.searchMenu = function(searchDesc) {
      var promise = SearchService.searchMenu();
      promise.then(function(response) {
        ctrl.items = response.data.menu_items;
      });
    };
  }

  SearchService.$inject = ['$http'];
  function SearchService($http) {
    var service = this;

    this.searchMenu = function() {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      });
    };
  }

}());