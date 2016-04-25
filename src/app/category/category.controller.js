(function() {
  'use strict';

  angular
    .module('waffleShop')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController(Items) {
    var vm = this;
    vm.items = Items;
  }
})();
