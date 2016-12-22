var app = angular.module('myApp', ['ngLodash']);

app.controller('myController', [
  '$scope',
  'lodash',
  function ($scope, lodash) {
    // Data
    $scope.categories = [{
      name: 'hamburgers', icon: 'flaticon-hamburger'
    },{
      name: 'subs', icon: 'flaticon-sub'
    },{
      name: 'drinks', icon: 'flaticon-drink'
    },{
      name: 'extras', icon: 'flaticon-fries'
    },{
      name: 'desserts', icon: 'flaticon-dessert'
    }];

    $scope.items = [{
      name: 'Hamburguesa Normal', price: 3600, category: 'hamburgers', amount: 0
    }, {
      name: 'Hamburguesa Mixta (2 sabores)', price: 4200, category: 'hamburgers', amount: 0
    }, {
      name: 'Hamburguesa Mixta (3 sabores)', price: 5000, category: 'hamburgers', amount: 0
    },{
      name: 'Hamburguesa Full ', price: 6000, category: 'hamburgers', amount: 0
    },{
      name: 'Hamburguesa Sazon y Amor ', price: 4500, category: 'hamburgers', amount: 0
    },{
      name: 'Pepito de Carne', price: 7500, category: 'subs', amount: 0
    },{
      name: 'Pepito de Pollo', price: 7500, category: 'subs', amount: 0
    },{
      name: 'Pepito Mixto', price: 9500, category: 'subs', amount: 0
    },{
      name: 'Pepito Full', price: 12500, category: 'subs', amount: 0
    },{
      name: 'Ración de Papas Fritas', price: 2500, category: 'extras', amount: 0
    },{
      name: 'Malta', price: 700, category: 'drinks', amount: 0
    },{
      name: 'Refresco de Litro y Medio', price: 3200, category: 'drinks', amount: 0
    },{
      name: 'Nestea por Vaso', price: 700, category: 'drinks', amount: 0
    },{
      name: 'Nestea por Jarra', price: 2700, category: 'drinks', amount: 0
    },{
      name: 'Postres', price: 1500, category: 'desserts', amount: 0
    }];

    $scope.total = 0;
    $scope.selectedCategory = '';
    $scope.amount = -1;

    // Functions
    $scope.set = function (item, amount) {
      item.amount = amount >= 0 ? amount : 0;
      var totalItems = lodash.map($scope.items, function (item) {
        return item.amount * item.price;
      });
      $scope.total = lodash.reduce(totalItems, function (sum, n) {
        return sum + n;
      }, 0);
    }

    $scope.new = function () {
      lodash.forEach($scope.items, function(item) {
        $scope.set(item,0);
      });
    }

    $scope.greatherThan = function (number) {
      return function (item) {
        return item.amount > number;
      }
    };
  }
])
