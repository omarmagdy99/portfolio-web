var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider) {
	// body...
	$routeProvider
	.when("/",{
		templateUrl : "home.html"
	})

	.when("/page1",{
		templateUrl : "page1.html"
	})
	.when("/page2",{
		templateUrl : "page2.html"
	})
});