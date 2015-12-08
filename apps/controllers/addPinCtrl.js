app.controller("createBoardCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray){

  // This is invoked when the user selects "pin-it" from an image on the homepage
  // A model is displayed to allow the user to add the pin to one of their existing boards
  // or create a new board to add it to
  // ?????I think this code should be in HomeCtrl!!!!

  $scope.pinIt = function(pin) {
    console.log("I made it to the pinIt function");

    // modal displayed
    console.log("pin this img ", pin);
    $('#myModal').modal(pin);
 
  };

    $scope.addPin = function() {
      // var ref = new Firebase("https://sam-pinterest.firebaseio.com/");
      var authdata = ref.getAuth();
      // get user's unique id
      var userId = authdata.uid;
      $scope.pins.$add({
        pin: $scope.userId;
      });
    };

    console.log("I'm done Pinning!!!");
    $location.path("#/home");
  }

}]);