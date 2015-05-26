angular.module('F1FeederApp',[
	
	'F1FeederApp.services',
	'F1FeederApp.controller',
	'ngRoute'])
.config(['$routeProvider', function($routeProvider) {

	$routeProvider
	.when("/drivers", {
		templateUrl:"driversList.html",
		controller:"driversController"
	})
	.otherwise({redirectTo:'/drivers'});
	}]);
