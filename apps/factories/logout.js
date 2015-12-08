app.factory("Logout", ["$firebaseAuth",
  function($firebaseAuth) {
    // returns the firebase authenication object that we acces in our LoginCtrl
    var ref = new Firebase("https://sam-pinterest.firebaseio.com");
    return function(){
      $firebaseAuth(ref).$unauth();
      console.log("logged out");
    };
  }
]);