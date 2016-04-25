(function() {
  'use strict';

  angular
    .module('waffleShop')
    .factory('ItemsFactory', ItemsFactory);

  /** @ngInject */
  function ItemsFactory($http) {
    var self = this;

    // Promises for resources
    var ItemsPromise;
    var CategoriesPromise;

    function getItems() {
      if (ItemsPromise)
        return ItemsPromise;

      return $http.get('/app/resources/items.json');
    }

    function getCategories() {
      if (CategoriesPromise)
        return CategoriesPromise;

      return $http.get('/app/resources/categories.json');
    }

    function getByCategory(categoryId) {
      return Items.filter(function(item) {
        return item.categoryId == categoryId;
      });
    }

    function getByCategories(categoryIds) {
      return getItems().then(function(items) {
        return items.data.filter(function(item) {
          return categoryIds.indexOf(item.categoryId) !== -1;
        });
      });
    }

    return {
      all: getItems,
      getByCategory: getByCategory,
      getByCategories: getByCategories,
      getCategories: getCategories
    };
  }
})();
