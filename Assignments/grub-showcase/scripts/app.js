(function() {
  'use strict';
  
  angular.module('GrubShowcase', ['ui.router'])
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
      });
  }
}())