var app = angular.module('myApp', ['ngLodash']);

app.controller('myController', [
  '$scope',
  'lodash',
  function ($scope, lodash) {
    // Data
    $scope.items = [{
      name: 'Item 0',
      price: 10,
      amount: 0
    }, {
      name: 'Item 1',
      price: 15,
      amount: 0
    }, {
      name: 'Item 2',
      price: 30,
      amount: 0
    },{
      name: 'Item 4',
      price: 20,
      amount: 0
    },{
      name: 'Item 5',
      price: 12,
      amount: 0
    }];

    $scope.total = 0;

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
  }
])
