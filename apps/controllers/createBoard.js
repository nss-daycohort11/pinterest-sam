app.controller("createBoardCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray){

  // This is invoked when the user selects "pin-it" from an image on the homepage
  // A model is displayed to allow the user to add the pin to one of their existing boards
  // or create a new board to add it to

  $scope.pinIt = function(pin) {
    console.log("I made it to the pinIt function");
    console.log("themeId to be added ", themeId);

    // modal displayed

    $scope.;
    var ref = new Firebase("https://sam-pinterest.firebaseio.com/");
    var authdata = ref.getAuth();
    // get user's unique id
    var userId = authdata.uid;

    



    // download the data into a local object by making a reference and use this sytax
    // similar to snapshot.val
    // controls the partial homepage.html
    
    $scope.themes = $firebaseArray(ref);

  // Make sure you use the $loaded promise handler, which waits
  // for all songs to be loaded from the reference before you try
  // to grab the record the user wanted.

    // $scope.songs.$loaded()
    //   .then(function() {
    //   // The $getRecord method on a $firebaseArray is very useful
    //     $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
    //   })
    //   .catch(function(error) {
    //     console.log("Error:", error);
    //   });
 
  // if the pin-it button is clicked call the pinIt function to display the modal

    console.log("pin this img ", pin);
    $('#myModal').modal(options);
    
  };
    $scope.newSong = { artist: "", album: "", name: ""};

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        name: $scope.newSong.name,
        album: $scope.newSong.album
      });
    };
  }

}]);