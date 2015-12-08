app.controller("LoginCtrl", ["$scope", "Auth", "$location", "$firebaseObject",
  function($scope, Auth, $location, $firebaseObject) {

	$scope.auth = Auth;
	var ref = new Firebase("https://sam-pinterest.firebaseio.com");

	$scope.auth.$onAuth(function(authData) {
		$scope.authData = authData;
		if(authData !== null){
			console.log(authData.auth.uid);
		} else {
			console.log('User not currently logged in');
		}
	});

    var authData = ref.getAuth();
    console.log("authData: ", authData);
    //if no login, authenticate with github OAuth
    if (authData !== null) {
    	$location.path("/home");
    }

    if(authData === null) {
      ref.authWithOAuthPopup("github", function(error, authData) { //1.firebase sends request for request token to github with client id and secret id
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $location.path("#/home");
        }
      });
    }

    

   
  
}]);
