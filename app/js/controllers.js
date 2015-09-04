'use strict';

/* Controllers */

var cryptApp = angular.module('cryptApp', []);
cryptApp.controller('CryptCtrl', function ($scope){
	$scope.cryptInput = "Input Encrypted Text";
	$scope.hash = {
		A: 0, B: 0, C: 0, D: 0,	E: 0, F: 0,	G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0,	Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0,	Y: 0, Z: 0
	};
	$scope.percent = {
		A: 0, B: 0, C: 0, D: 0,	E: 0, F: 0,	G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0,	Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0,	Y: 0, Z: 0
	};
	$scope.hashmaster = {
		A: 0, B: 0, C: 0, D: 0,	E: 0, F: 0,	G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0,	Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0,	Y: 0, Z: 0
	};

	$scope.max = {character: "", value: 0};
	$scope.maxmaster = {character: "", value: 0};


	$scope.calcInstances = function(){
		$scope.cryptInput = angular.uppercase($scope.cryptInput);
		$scope.hash = angular.copy($scope.hashmaster);
		$scope.percent = angular.copy($scope.hashmaster);
		$scope.max = angular.copy($scope.maxmaster)
		// Gets the Instances of each character
		for (var i = 0; i < $scope.cryptInput.length; i++) {

			$scope.hash[$scope.cryptInput[i]]++;
			$scope.percent[$scope.cryptInput[i]] =  $scope.hash[$scope.cryptInput[i]] / $scope.cryptInput.length;
			if ($scope.max.value < $scope.hash[$scope.cryptInput[i]]){
				$scope.max.character = $scope.cryptInput[i];
				$scope.max.value = $scope.hash[$scope.cryptInput[i]]
			}
		};
	};
	$scope.calcMax = function(){
		return $scope.max.character;
	};
})