(function() {
  'use strict';

  angular
    .module('waffleShop')
    .factory('ShoppingCartFactory', ShoppingCartFactory);

  /** @ngInject */
  function ShoppingCartFactory($window, lodash) {
    var self = this;
    var shoppingCart = [];

    function addToCart(item) {
      var sum = lodash.sumBy(shoppingCart, function(cartItem) {
        return cartItem.id === item.id ? 1 : 0;
      });

      if (sum >= item.quantitiyInStock || item.quantitiyInStock === 0) {
        $window.alert("Sorry, out of stock.");

        return false;
      }

      shoppingCart.push(item);
    }

    function removeFromCart(item) {

    }

    function getShoppingCart() {
      return shoppingCart;
    }

    return {
      getShoppingCart: getShoppingCart,
      addToCart: addToCart
    }
  }
})();
