(function() {
  'use strict';

  angular.module('GrubShowcase')
    .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['data'];
  function MenuItemsController(data) {
    var menuItemsCtrl = this;

    menuItemsCtrl.categoryName = data.category.name;
    menuItemsCtrl.menuItems = data.menu_items;
  }
}());