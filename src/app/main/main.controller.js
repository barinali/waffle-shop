(function() {
  'use strict';

  angular
    .module('waffleShop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr) {
    var vm = this;

    function showNotification(data) {
      toastr.info(data.text);
    }

    vm.showNotification = showNotification;
  }
})();
