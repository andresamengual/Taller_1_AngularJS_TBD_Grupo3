(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
          .when('/actores', {
              templateUrl: 'views/actores.html',
              controller: 'actoresCtrl'
          })
          .when('/nuevo', {
              templateUrl: 'views/nuevo.html',
              controller: 'nuevoCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
