(function() {
  'use strict';

  angular
    .module('waffleShop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Items, ShoppingCartFactory, toastr) {
    var vm = this;
    vm.items = Items.data;
    vm.shoppingCart = ShoppingCartFactory.getShoppingCart();
    vm.addToCart = ShoppingCartFactory.addToCart;

    function showNotification(data) {
      toastr.info(data.text);
    }

    vm.showNotification = showNotification;
  }
})();
