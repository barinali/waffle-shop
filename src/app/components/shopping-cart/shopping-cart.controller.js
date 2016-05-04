(function() {
  'use strict';

  angular
    .module('waffleShop')
    .controller('ShoppingCartController', ShoppingCartController);

  /** @ngInject */
  function ShoppingCartController(ShoppingCartFactory) {
    var vm = this;
    vm.items = ShoppingCartFactory.getShoppingCart();
    vm.addToCart = ShoppingCartFactory.addToCart;
  }
})();
