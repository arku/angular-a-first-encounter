(function() {

  'use strict';

  angular.module('ShoppingListCheckOff', ['ngAnimate'])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingList', ShoppingListService);
    
    ToBuyShoppingController.$inject = ['ShoppingList'];
    AlreadyBoughtShoppingController.$inject = ['ShoppingList'];
    
    function ToBuyShoppingController(shoppingList) {
      
      this.items = shoppingList.getItemsToBuy();

      this.addToList = function(index) {
        shoppingList.addToBoughtList(index);
      }

      this.itemsCartEmpty = function() {
        return this.items.length == 0;
      }

    };
    
    function AlreadyBoughtShoppingController(shoppingList) {
      this.boughtItems = shoppingList.getBoughtItems();
      
      this.boughtCartEmpty = function() {
        return this.boughtItems.length == 0;
      }
    }
    
    
    function ShoppingListService() {
      var service = this;
      
      var itemsToBuy = [
        {
          name: 'Cookies',
          quantity: 15
        },
        {
          name: 'Cool drinks',
          quantity: 10
        },
        {
          name: 'Eggs',
          quantity: 30
        },
        {
          name: 'Bread',
          quantity: 3
        },
        {
          name: 'Chocolates',
          quantity: 50
        }
      ];
      
      var boughtItems = [];
      service.getItemsToBuy = function() {
        return itemsToBuy;
      };

      service.getBoughtItems = function(){
        return boughtItems;
      };

      service.addToBoughtList = function(index) {

        var removedItem = itemsToBuy.splice(index, 1);

        // splice returns an array of elements  removed
        boughtItems.unshift(removedItem[0]);
      }
    }
    
    
}());
