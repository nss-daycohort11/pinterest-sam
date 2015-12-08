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
	    // Deleting 
		$scope.delete = function(pin) {
			console.log("pin", pin);
			console.log("user pin delete", $scope.userpins);
			$scope.userpins.$remove(pin);
		}


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

	// $scope.filteredArray = [];
 //    var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/pins");
 //    var pinsArray = $firebaseArray(pinsRef);
 //    pinsArray.$loaded()
 //        .then(function(){
 //            angular.forEach(pinsArray, function(pin) {
 //                console.log("pin", pin);
 //                if (uid === pin.uid){
 //                    $scope.filteredArray.push(pin);
 //                }
 //            })
 //            return $scope.filteredArray;
 //        });

		var newRef = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
        $scope.filtered = $firebaseArray(newRef);
        var query = newRef.orderByChild("uid").equalTo(uid);
        $scope.filteredArray = $firebaseArray(query);

	}
]);


