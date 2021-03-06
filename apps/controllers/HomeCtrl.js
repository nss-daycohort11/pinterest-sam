app.controller("HomeCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "storage", "$firebaseArray", "Logout",
  function($scope, $location, $firebaseObject, Auth, storage, $firebaseArray, Logout) {

  	var ref = new Firebase("https://sam-pinterest.firebaseio.com");
	var usersFirebase = ref.child("users");
	console.log("usersfirebase", usersFirebase);
	var userExists = false;
	var authData = Auth.$getAuth();
	console.log("authdata2", authData);
	var auth;



	 // Logout
    $scope.logout = function(){
      Logout();
      console.log("logged out");
    };

	var uidRef = new Firebase("https://sam-pinterest.firebaseio.com/users/" + authData.uid);	
	$scope.data = $firebaseObject(uidRef);

	$scope.data.$loaded() 
		.then(function(){
			console.log("scope.data", $scope.data);


			if ($scope.data.$value !== null) {
				console.log('user alreayd saved');
				userExists = true;
			}
			if (userExists === false) {
				console.log("hello");
				uidRef.set({
					uid: authData.uid,
					image: authData.github.profileImageURL,
					displayName: authData.github.displayName
				});
			}
		// Setting userID 
		storage.setUserId(authData.uid);

		// Firebase ref for Pins
		var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
		$scope.allpins = $firebaseArray(pinsRef);
		});


		$scope.addPin = function(pinIt) {
  		var url = pinIt;
  		console.log("image", pinIt);
  		var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/pins/");
				console.log("pinsRef ", pinsRef);
				pinsRef.push({
					url: pinIt,
					uid: authData.uid
				})
				// pinsRef.users.userpins.$add(pinIt);
			    console.log("I'm done Pinning!!!");
  	  };	


}]);