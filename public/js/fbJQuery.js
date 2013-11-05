/*
 * fb login test 2.
 * 
 * http://developers.facebook.com/docs/facebook-login/getting-started-web/
 * 
 * using jquery load version.
 */

$(document).ready(function() {
	$.ajaxSetup({
		cache : true
	});
	$.getScript('//connect.facebook.net/en_US/all.js', function() {
		FB.init({
			appId : '172330626307632',
			channelUrl : 'channel.html',
			status : true, 	// check login status
			cookie : true, 	// enable cookies to allow the server to access the session
			xfbml : true 	// parse XFBML
		});
		//$('#login-Button,#feedbutton').removeAttr('disabled');
		//FB.getLoginStatus(updateStatusCallback);
		
		FB.Event.subscribe('auth.authResponseChange', function(response) {
			console.log("start of auth response");
			// Here we specify what we do with the response anytime this event occurs.
			if (response.status === 'connected') {
				// The response object is returned with a status field that lets the app know the current
				// login status of the person. In this case, we're handling the situation where they
				// have logged in to the app.
				testLoggedIn();
			} 
			else if (response.status === 'not_authorized') {
				// In this case, the person is logged into Facebook, but not into the app, so we call
				// FB.login() to prompt them to do so.
				// In real-life usage, you wouldn't want to immediately prompt someone to login
				// like this, for two reasons:
				// (1) JavaScript created popup windows are blocked by most browsers unless they
				// result from direct interaction from people using the app (such as a mouse click)
				// (2) it is a bad experience to be continually prompted to login upon page load.
				console.log(">>> not authorized for app but logged in.");
				testNotAuthorized();
				FB.login();
			} 
			else {
				// In this case, the person is not logged into Facebook, so we call the login()
				// function to prompt them to do so. Note that at this stage there is no indication
				// of whether they are logged into the app. If they aren't then they'll see the Login
				// dialog right after they log in to Facebook.
				// The same caveats as above apply to the FB.login() call here.
				console.log(">>> not logged into fb.");
				testNotLoggedInFB();
				FB.login();
			}
		});
	});
});


// Here we run a very simple test of the Graph API after login is successful.
// This testAPI() function is only called in those cases.
//
// use this...
// actually. you probably want to have some non default not logged in state.
// and this call your login code...
function testLoggedIn() {
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
		console.log('id: ' + response.id);
		console.log('fisrt name: ' + response.first_name);
		console.log('gender: ' + response.gender);
	});
}

// user is logged into fb but not authorized to use app.
function testNotAuthorized() {
	console.log("not authorized for app but logged in.");
}

// user is not logged into fb.
function testNotLoggedInFB() {
	console.log("not logged in");
}
