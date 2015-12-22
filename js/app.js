var app = angular.module('myApp', ['ui.router', 'firebase']);
var ref = new Firebase('https://jacobs-portfolio.firebaseIO.com/');

	app.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'templates/projects.html',
			controller: 'ProjectsController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
	})
	app.controller('HomeController', function($scope){
	})
	app.controller('ProjectsController', function($scope, $firebaseObject, $firebaseArray){
		var projectsRef = ref.child('projects');
		$scope.projectData = $firebaseArray(projectsRef);
	})
	app.controller('ContactController', function($scope){
		
	})


// app.controller('contactController', function($scope,$firebaseAuth, $firebaseArray, $firebaseObject){
	

// 	var queryRef = ref.child('query')
// 	var peopleRef = ref.child('people')
// 	$scope.query = $firebaseArray(queryRef)
// 	$scope.people = $firebaseObject('people')
// 	$scope.authObj = $firebaseAuth(ref)

// 	$scope.submit = function() {
// 		$scope.authObj.$createUser({
// 			name=$scope.name,
// 			reason = $scope.why,
// 			phone = $scope.phone,
// 			email = $scope.email,
// 			time = $scope.ideal,
// 		})
// 		.then(function(){
// 			$scope.people.$save();

// 		})
// 	}

// 	$scope.getPeople = function() {
// 		$scope.query.$add({
// 			name:name,
// 			reason:reason,
// 			phone-number:phone,
// 			email-address:email,
// 			ideal-time:ideal
// 		})
// 		$scope.query.$save();
// 	}
// })