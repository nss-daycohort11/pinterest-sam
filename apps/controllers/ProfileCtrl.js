app.controller("ProfileCtrl", ["$scope", "$location", "$firebaseObject", "Auth", "$firebaseArray",
  function($scope, $location, $firebaseObject, Auth, $firebaseArray) {

	var authData = Auth.$getAuth();


	var pinsRef = new Firebase("https://sam-pinterest.firebaseio.com/pins");
	var pinsArray = $firebaseArray(pinsRef);
	pinsArray.$loaded()
	    .then(function(){
	        angular.forEach(pinsArray, function(pin) {
	            console.log("pin", pin);
	            if (authData.uid === pin.uid){
	            	show pins on profile page 
	            }
	        })
	    });
		



}]);