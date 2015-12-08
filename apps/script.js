var app = angular.module("Pinterest", 
  ["firebase", "ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      // when('/addPin', {
      //   templateUrl: 'partials/addPin.html',
      //   controller: 'addPinCtrlCtrl'
      // })
      // .otherwise({ redirectTo: '/login'});
  }]);