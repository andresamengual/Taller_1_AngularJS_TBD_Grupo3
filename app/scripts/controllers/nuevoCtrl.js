(function(){
    angular.module('angularSpa')
    .controller('nuevoCtrl', function($scope,$http){
        $scope.agregar = function (){
          $http({
              method: 'POST',
              url: 'http://localhost:8080/sakila-backend-master/actors',
              data: {
                "firstName": $scope.nombre,
                "lastName" : $scope.apellido
              },
              headers: {'Content-Type': 'application/json'}
            }).then(function(data,status,headers,config){
                $scope.status = 'Agregado Correctamente';
                alert("Agregado Correctamente");
            },
            function(error,status,headers,config){
              $scope.status = 'Error al agregar';
              alert("Error al agregar");
              console.log(error);
            });
        }
    });
})();
