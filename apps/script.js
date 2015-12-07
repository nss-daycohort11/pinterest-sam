var app = angular.module("Pinterest", 
  ["firebase", "ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      // when('/songs/new', {
      //   templateUrl: 'partials/song-form.html',
      //   controller: 'SongFormCtrl'
      // }).
      // when('/songs/:songId', {
      //   templateUrl: 'partials/songdetail.html',
      //   controller: 'SongDetailCtrl'
      // })
      .otherwise({ redirectTo: '/login'});
  }]);