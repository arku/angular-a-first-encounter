(function() {
  angular.module('ShoppingListApp', [])
    .controller('MainController', MainController)
    .service('ShoppingList', ShoppingListService);
    
    MainController.$inject = ['ShoppingList'];
    
    function MainController(shoppingList) {
      
      this.items = shoppingList.getItemsToBuy();
      this.boughtItems = shoppingList.getBoughtItems();
      
      this.nothingBought = (this.boughtItems.length == 0);
    };
    
    
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
    }
    
    
}());
