app.controller("ProfileCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "storage", "$firebaseArray", "Logout",
  	function($scope, $location, $firebaseObject, Auth, storage, $firebaseArray, Logout) {
  		// Getting UserID
  		var uid = storage.getUserId();
  		console.log("uid", uid);
  		var ref = new Firebase("https://sam-pinterest.firebaseio.com");
  		// Logout --on the nav bar
	    $scope.logout = function(){
	      Logout();
	      console.log("logged out");
	    };

	    // Deleting ---- is this being used or called???
		$scope.delete = function(pin) {
			console.log("pin", pin);
			console.log("user pin delete", $scope.userpins);
			$scope.userpins.$remove(pin);
		}

		// input a URL image and "add" to the users profile
		$scope.addImage = function() {
			var url = $scope.image;
			// Firebase ref for all Pins
			var allPins = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
			$scope.everypin = $firebaseArray(allPins);
			console.log("everypin", $scope.everypin);
			console.log("ProfileCtrl click");
				$scope.everypin.$add({
					url: url,
					uid: uid
				})	
		}

	// creating a filtered array from ALL the pins in our pins to get only the pins associated
	// with the logged in user...to show their pins only in their profile

	$scope.filteredArray = [];
    var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/pins");
    var pinsArray = $firebaseArray(pinsRef);
    pinsArray.$loaded()
        .then(function(){
            angular.forEach(pinsArray, function(pin) {
                console.log("pin", pin);
                if (uid === pin.uid){
                    $scope.filteredArray.push(pin);
                }
            })
            return $scope.filteredArray;
        });

        // in the firebase array of pins, use orderByChild to go through array 
        // and compare the "uid" to the logged in user's uid. 
        // If it is equal, the child with the matching "uid" is returned to query.
        // query is used to create the new firebase array of pins with the user's id
        // ???what is query?  Is it an array???
        // (need to create array through firebase to use $remove)
        // finally use the remove on this array to delete the "pin" from the delete button

		var newRef = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
        $scope.filtered = $firebaseArray(newRef);
        var query = newRef.orderByChild("uid").equalTo(uid);
        $scope.filteredArray = $firebaseArray(query);

        $scope.delete = function(pin) {
           console.log("pin",pin);
           $scope.filteredArray.$remove(pin);
       }

	}
]);


