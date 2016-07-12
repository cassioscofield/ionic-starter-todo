angular.module('starter.service.todo', [])

.factory('Todo', function($http) {
  
  var itens = [];
  
  return {
    listar: function(options, callback) {
      $http({
        method: 'GET',
        url: 'https://sheetsu.com/apis/v1.0/49568d9e'
      }).then(function successCallback(response) {
          itens = response.data;
          itens.forEach(function(element) {
            if(!element.name) {
              itens.splice(itens.indexOf(element), 1);
            }
          }, this);
          callback(null, itens);
        }, function errorCallback(response) {
          console.error(JSON.stringify(response));
          callback(JSON.stringify(response));
        });
    },
    adicionar: function(item) {
      $http({
        method: 'POST',
        url: 'https://sheetsu.com/apis/v1.0/49568d9e',
        data: item
      }).then(function successCallback(response) {
          itens.push(item);
          callback(null, itens);
        }, function errorCallback(response) {
          console.error(JSON.stringify(response));
          callback(JSON.stringify(response));
        });
    },
    remover: function(item) {
      $http({
        method: 'DELETE',
        url: 'https://sheetsu.com/apis/v1.0/49568d9e/' + 'name' + '/' + item.name
      }).then(function successCallback(response) {
          itens.splice(itens.indexOf(item), 1);
          callback(null, itens);
        }, function errorCallback(response) {
          console.error(JSON.stringify(response));
          callback(JSON.stringify(response));
        });
    }

  };

});
