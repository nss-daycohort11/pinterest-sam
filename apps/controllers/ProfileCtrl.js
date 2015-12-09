app.controller("ProfileCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "storage", "$firebaseArray", "Logout",
  	function($scope, $location, $firebaseObject, Auth, storage, $firebaseArray, Logout) {
  		// Getting UserID
  		var uid = storage.getUserId();
  		console.log("uid", uid);
  		var ref = new Firebase("https://sam-pinterest.firebaseio.com");
  		// Logout
	    $scope.logout = function(){
	      Logout();
	      console.log("logged out");
	    };

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


		// Filtering
		var newRef = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
        $scope.filtered = $firebaseArray(newRef);
        var query = newRef.orderByChild("uid").equalTo(uid);
        $scope.filteredArray = $firebaseArray(query);

        // Deleteing
        $scope.delete = function(pin) {
           console.log("pin",pin);
           $scope.filteredArray.$remove(pin);
       }

	}
]);


