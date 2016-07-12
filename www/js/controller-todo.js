angular.module('starter.controller.todo', [
  'starter.service.todo'
  ])

.controller('TodoCtrl', function($scope, Todo, $ionicLoading) {

  $ionicLoading.show();
  Todo.listar({}, function (error, data) {
    $ionicLoading.hide();
    $scope.items = data;
  });

  $scope.adicionarClick = function (item) {
    $ionicLoading.show();
    Todo.adicionar(item, function(error, data) {
      $ionicLoading.hide();
    });
  };

  $scope.removerClick = function (item) {
    $ionicLoading.show();
    Todo.remover(item, function(error, data) {
      $ionicLoading.hide();
    });
  };

});
