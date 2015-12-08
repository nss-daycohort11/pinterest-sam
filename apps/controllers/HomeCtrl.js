app.controller("HomeCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "$firebaseArray",
  function($scope, $location, $firebaseObject, Auth, $firebaseArray) {

  	var ref = new Firebase("https://sam-pinterest.firebaseio.com");
	var usersFirebase = ref.child("users");
	console.log("usersfirebase", usersFirebase);
	var userExists = false;
	var authData = Auth.$getAuth();
	console.log("authdata2", authData);

	var uidRef = new Firebase("https://sam-pinterest.firebaseio.com/users/" + authData.uid);	
	$scope.data = $firebaseObject(uidRef);

	$scope.data.$loaded() 
		.then(function(){
			console.log("scope.data", $scope.data);


			if ($scope.data.$value !== null) {
				console.log('user already saved');
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
		});

//monkeyin' around

	function AddPins(){

	$scope.imageUrlPin = ""; //add copy to model

	var pinID = new Firebase("https://sam-pinterest.firebaseio.com/pins/pin_" + authData.uid);

	pinID.set({
		image: imageUrlPin,
		uid: authData.uid
	});
		
	};




	


}]);