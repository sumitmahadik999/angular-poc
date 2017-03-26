var app = angular.module("advancedroute" , ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "login.html"
	})
	.when('/home', {
		resolve : {
			"check" : function($location, $rootScope) {
				if(!$rootScope.loggedIn) {
					$location.path("/")
				}
			}
		},
		templateUrl: "home.html"
	})
	.when('/contact', {
		resolve : {
			"check" : function($location, $rootScope) {
				if(!$rootScope.loggedIn) {
					$location.path("/")
				}
			}
		},
		templateUrl : "contact.html"
	})
	.when('/about', {
		resolve : {
			"check" : function($location, $rootScope) {
				if(!$rootScope.loggedIn) {
					$location.path("/")
				}
			}
		},
		templateUrl : "about.html"
	})
	.otherwise({
		redirectTo: '/'
	})
}]);

app.controller('loginCtrl', function($scope, $location, $rootScope) {
	$scope.submit = function() {
		if($scope.username == "admin" && $scope.password == "admin") {
			$rootScope.loggedIn = true;
			$location.path("/home");
		} else {
			alert("Incorrect Username and Password!")
		}
	}
});