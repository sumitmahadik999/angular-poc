var app = angular.module("basicroute" , ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		template: "This is the home page."
	})
	.when('/contact', {
		template : "This is a contact Page."
	})
	.otherwise({
		redirectTo: '/'
	})
}]);