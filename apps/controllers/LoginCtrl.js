app.controller("LoginCtrl", ["$scope", "Auth", "$location",
  function($scope, Auth, $location ) {

  $scope.auth = Auth;

	$scope.auth.$onAuth(function(authData) {
		$scope.authData = authData;
		if(authData !== null){
		console.log(authData.auth.uid);
		} else {
		console.log('User not currently logged in');
		}
	});

	$scope.redirect = function(){
	$location.path("#/home");
	};


	var ref = new Firebase("https://sam-pinterest.firebaseio.com/users");
    var authData = ref.getAuth();
    console.log("authData: ", authData);
    //if no login, authenticate with github OAuth
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
