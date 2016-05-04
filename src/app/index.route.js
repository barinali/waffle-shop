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
          'Categories': function(ItemsFactory) {
            return ItemsFactory.getCategories();
          }
        }
      })
      .state('home', {
        parent: 'layout',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: '_main',
        resolve: {
          'Items': function(ItemsFactory) {
            return ItemsFactory.all();
          },
          'Categories': function(ItemsFactory) {
            return ItemsFactory.getCategories();
          }
        }
      })
      .state('category', {
        parent: 'layout',
        url: '/category/:categoryId',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryController',
        controllerAs: '_category',
        resolve: {
          'CategoryId': function($stateParams) {
            return parseInt($stateParams.categoryId);
          },
          'Categories': function($q, lodash, CategoryId, ItemsFactory) {
            var deferred = $q.defer();

            ItemsFactory.getCategories().then(function(categories) {
              categories = categories.data;

              categories = lodash.filter(categories, function(category) {
                return category.parent === CategoryId
                  || (category.parent !== 0 && category.id === CategoryId);
              });

              deferred.resolve(categories);
            })

            return deferred.promise;
          },
          'Items': function(Categories, ItemsFactory) {
            Categories = Categories.map(function(category) {
              return category.id;
            });

            return ItemsFactory.getByCategories(Categories);
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
