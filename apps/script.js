var app = angular.module("Pinterest", 
  ["firebase", "ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({ redirectTo: '/'});
  }]);