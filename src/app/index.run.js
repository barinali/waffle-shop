(function() {
  'use strict';

  angular
    .module('waffleShop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
