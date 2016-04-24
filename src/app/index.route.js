(function() {
  'use strict';

  angular
    .module('waffleShop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('layout', {
        abstract: true,
        views: {
          '': {
            templateUrl: 'app/layout/index.html'
          },
          'navbar@layout': {
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: '_navbar'
          }
        },
        resolve: {
          'Categories': function($http) {
            return $http.get('/app/resources/categories.json');
          }
        }
      })
      .state('home', {
        parent: 'layout',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          'Items': function($http) {
            return $http.get('/app/resources/items.json');
          },
          'Categories': function($http) {
            return $http.get('/app/resources/categories.json');
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
