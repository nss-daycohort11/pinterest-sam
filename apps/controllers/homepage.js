app.controller("homePageCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray){

  var ref = new Firebase("https://sam-pinterest.firebaseio.com/pins/");

  // download the data into a local object by making a reference and use this sytax
  // similar to snapshot.val
  // controls the partial homepage.html
  
  $scope.pins;
  
  $scope.pins = $firebaseArray(ref);

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
 
 
}]);