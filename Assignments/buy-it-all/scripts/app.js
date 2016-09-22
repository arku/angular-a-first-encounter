(function() {
  angular.module('ShoppingListApp', [])
    .controller('MainController', MainController)
    .service('ShoppingList', ShoppingListService);
    
    MainController.$inject = ['ShoppingList'];
    
    function MainController(shoppingList) {
      
      this.items = shoppingList.getItemsToBuy();
      this.boughtItems = shoppingList.getBoughtItems();
      
      this.nothingBought = (this.boughtItems.length === 0);

      this.addToList = function(index) {
        shoppingList.addToBoughtList(index);
        this.nothingBought = false;
      }
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

      service.addToBoughtList = function(index) {

        var removedItem = itemsToBuy.splice(index, 1);

        // splice returns an array of elements  removed
        boughtItems.unshift(removedItem[0]);
      }
    }
    
    
}());
