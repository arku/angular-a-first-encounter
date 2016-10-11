(function() {
  'use strict';

  angular.module('GrubShowcase')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          categories: ['RestaurantMenuService', function(restaurantMenuService) {
            return restaurantMenuService.getCategories()
              .then(function(response) {
                return response.data;
              })
          }]
        }
      })
      .state('menuItems', {
        url: '/category/:categoryCode/items',
        templateUrl: 'views/menu_items.html',
        controller: 'MenuItemsController as menuItemsCtrl',
        resolve: {
          data: ['RestaurantMenuService', '$stateParams',
                        function(restaurantMenuService, $stateParams) {
            return restaurantMenuService.getMenuItems($stateParams.categoryCode)
              .then(function(response) {
                return response.data;
              });
          }]
        }
      });
  }
}());