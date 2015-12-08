var app = angular.module("Pinterest", 
  ["firebase", "ngRoute", "angular.filter", "firebase"]);

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
      }).
      when('/animals', {
        templateUrl: 'partials/animals.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({ redirectTo: '/'});
  }]);