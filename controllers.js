var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http){


//old way
// $http.get('data.json').success(function (response){
// 	$scope.artists = response;
// });

// 1.5 way  - remember to use response.data
$http({

	method :'GET',
	url:'data.json'
}).then(function successCB(response){
	$scope.artists = response.data;

	$scope.status = response.status;
	$scope.headers = response.headers;
	$scope.config = response.config;
	$scope.statusText = response.statusText;

}, function errorCB(response){
	$scope.artists = response.data;

});





});

// data – {string|Object} – The response body transformed with the transform functions.
// status – {number} – HTTP status code of the response.
// headers – {function([headerName])} – Header getter function.
// config – {Object} – The configuration object that was used to generate the request.
// statusText – {string} – HTTP status text of the response.
