/**
 * need to call this after fb object gets loaded..
 * this is a simple test....
 * 
 * you can either use a javascript timeout
 * or just make a call to it after they fb async call.
 */
var isFBLoggedIn = function() {
	FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
	    // the user is logged in and has authenticated your
	    // app, and response.authResponse supplies
	    // the user's ID, a valid access token, a signed
	    // request, and the time the access token 
	    // and signed request each expire
	    var uid = response.authResponse.userID;
	    var accessToken = response.authResponse.accessToken;
	    console.log("testFBLogin: logged in.");
	    
	    // probably a call to a another function
	    // to init a website.
	  } 
	  else if (response.status === 'not_authorized') {
	    // the user is logged in to Facebook, 
	    // but has not authenticated your app
	    console.log("testFBLogin: not logged in. but auth to app.");
	  } 
	  else {
	    // the user isn't logged in to Facebook.
	    console.log("testFBLogin: not logged in.");
	  }
	});
};
//var t = setTimeout(isFBLoggedIn, 10000);