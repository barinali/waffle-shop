(function() {
  'use strict';

  angular
    .module('waffleShop')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController(Categories) {
    var vm = this;
    vm.categories = Categories.data;
  }
})();
