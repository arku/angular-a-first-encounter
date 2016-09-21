(function() {
  angular.module('ShoppingListApp', [])
    .controller('MainController', MainController)
    .service('ShoppingList', ShoppingListService);
    
    MainController.$inject = ['ShoppingList'];
    
    function MainController(shoppingList) {
      
      this.items = shoppingList.getItems();
    };
    
    
    function ShoppingListService() {
      var service = this;
      
      var items = [
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
      console.log(items);
      
      service.getItems = function() {
        return items;
      }
    }
    
    
}());
