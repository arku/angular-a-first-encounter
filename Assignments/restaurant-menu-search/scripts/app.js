(function() {
  'use strict';

  angular.module('RestaurantMenuSearch', [])
    .controller('MainController', MainController)
    .service('SearchService', SearchService)
    .directive('menuItem', MenuItemDirective)
    .controller('MenuItemDirectiveController', MenuItemDirectiveController);

  MainController.$inject = ['SearchService'];
  function MainController(searchService) {
    var ctrl = this;

    ctrl.dataFetched = false;
    ctrl.searchDesc = '';
    ctrl.dataLoading = false; // hide the preloader initially

    ctrl.searchMenu = function(searchDesc) {
        if(!ctrl.dataFetched) {
          var promise = searchService.getMenuItems();
          ctrl.dataLoading = true; // display the preloader
          promise
            .then(function(response) {
              // hide the preloader
              ctrl.dataLoading = false;

              var menuItems = response.data.menu_items;
              console.log('searching for', searchDesc);
              var items = searchService.searchMenu(searchDesc, menuItems);

              // Set an error message if the search returned no results
              // or if the user didn't enter anything in the search field
              if(searchDesc.length == 0 || items.length == 0)
                ctrl.errorMessage = "Nothing found";
              else {
                ctrl.items = items;
                ctrl.errorMessage = '';
              }
              ctrl.dataFetched = true;
            });
        }
        else {
          console.log('data already fetched');
          var items = searchService.searchMenu(searchDesc);
          if(searchDesc.length == 0 || items.length == 0) {
            ctrl.errorMessage = "Nothing found";
            ctrl.items = []; // clear the previously loaded data
          }
          else {
            ctrl.items = items;
            ctrl.errorMessage = '';
          }

        }
      };

      ctrl.removeItem = function(index) {
        searchService.removeItem(index);
      }
  }

  function MenuItemDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'views/menu_item.html',
      scope: {
        item: '<',
        index: '<',
        onRemove: '&'
      },
      controller: MenuItemDirectiveController,
      bindToController: true,
      controllerAs: 'menuItemCtrl'
    };

    return ddo;
  }

  function MenuItemDirectiveController() {
    var ctrl = this;
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

    service.removeItem = function(index) {
      var removed = matchingItems.splice(index, 1);
      console.log('Removed', removed);
    }

  }

}());