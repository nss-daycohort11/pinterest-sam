app.controller("ProfileCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "storage",
  	function($scope, $location, $firebaseObject, Auth, storage) {
  		var stupid;
  		// Getting UserID
  		var uid = storage.getUserId();
  		console.log("uid", uid);

	
		$scope.addImage = function() {
  			var url = $scope.image;
  			console.log("image", $scope.image);
  			var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/users/" + uid)
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
	}
]);  	