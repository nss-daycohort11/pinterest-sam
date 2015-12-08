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

		// Firebase ref for Pins
		var allUserPins = new Firebase("https://sam-pinterest.firebaseio.com/users/" + uid + "/userpins");
		$scope.userpins = $firebaseArray(allUserPins);
		console.log("userpins", $scope.userpins);


		$scope.addImage = function() {
  			var url = $scope.image;
  			console.log("image", $scope.image);
			console.log("ProfileCtrl click");
			console.log("scope.data", $scope.data);
				allUserPins.push({
					url: url
				});

  			var allPins = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
			$scope.data = $firebaseObject(allPins);
			console.log("ProfileCtrl click");
			console.log("scope.data", $scope.data);
				allPins.push({
					url: url,
					uid: uid
				})	
		}

		$scope.delete = function(pin) {
			$scope.userpins.$remove(pin);
		}

	}
]);


