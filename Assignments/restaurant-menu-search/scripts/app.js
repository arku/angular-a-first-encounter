(function() {
  'use strict';

  angular.module('RestaurantMenuSearch', [])
    .controller('MainController', MainController)
    .service('SearchService', SearchService)
    .directive('menuItem', MenuItemDirective);

  MainController.$inject = ['SearchService'];
  function MainController(searchService) {
    var ctrl = this;

    ctrl.dataFetched = false;
    ctrl.searchDesc = '';

    ctrl.searchMenu = function(searchDesc) {
        if(!ctrl.dataFetched) {
          var promise = searchService.getMenuItems();
          promise
            .then(function(response) {
              var menuItems = response.data.menu_items;
              console.log('searching for', searchDesc);
              ctrl.items = searchService.searchMenu(searchDesc, menuItems);
              ctrl.dataFetched = true;
            });
        }
        else {
          console.log('data already fetched');
          ctrl.items = searchService.searchMenu(searchDesc);
        }
      };
  }

  function MenuItemDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'views/menu_item.html',
      scope: {
        item: '<'
      }
    };

    return ddo;
  }

  SearchService.$inject = ['$http'];
  function SearchService($http) {
    var service = this;
    var menuItems = [];
    var matchingItems;

    service.getMenuItems = function() {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      });
    };

    service.searchMenu = function(searchDesc, items) {
      if(items != null) {
        console.log('Data loaded for the first and last time');
        items.forEach(function(item) {
          menuItems.push(item);
        });
      }

      matchingItems = [];
      menuItems.forEach(function(menuItem){
        if(menuItem.description.indexOf(searchDesc.toLowerCase()) >= 0)
          matchingItems.push(menuItem);
      });

      return matchingItems;
    };

  }

}());