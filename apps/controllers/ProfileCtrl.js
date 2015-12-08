app.controller("ProfileCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "storage", "$firebaseArray",
  	function($scope, $location, $firebaseObject, Auth, storage, $firebaseArray) {
  		var stupid;
  		// Getting UserID
  		var uid = storage.getUserId();
  		console.log("uid", uid);

		// Firebase ref for Pins
		var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/users/" + uid + "/userpins")
		$scope.userpins = $firebaseArray(pinsRef);
		console.log("userpins", $scope.userpins);


		$scope.addImage = function() {
  			var url = $scope.image;
  			console.log("image", $scope.image);
  			var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/users/" + uid + "/userpins")
			$scope.data = $firebaseObject(pinsRef);
			console.log("ProfileCtrl click");
			console.log("scope.data", $scope.data);
				pinsRef.push({
					url: url
				})

			var url = $scope.image;
  			console.log("image", $scope.image);
  			var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/pins/")
			$scope.data = $firebaseObject(pinsRef);
			console.log("ProfileCtrl click");
			console.log("scope.data", $scope.data);
				pinsRef.push({
					url: url,
					uid: uid
				})	
		}

		$scope.delete = function(pin) {
			$scope.userpins.$remove(pin);
		}

		}
]);