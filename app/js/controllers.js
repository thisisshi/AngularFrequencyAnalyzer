'use strict';

/* Controllers */

var cryptApp = angular.module('cryptApp', []);
cryptApp.controller('CryptCtrl', function ($scope){
	$scope.name = "Encrypted Text";
	$scope.cryptInput = "Input Encrypted Text";
	$scope.a = 0;
	$scope.hash = {
		a: 0, b: 0, c: 0, d: 0,	e: 0, f: 0,	g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0,	q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,	y: 0, z: 0
	};
	$scope.master = {
		a: 0, b: 0, c: 0, d: 0,	e: 0, f: 0,	g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0,	q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,	y: 0, z: 0
	};
	$scope.calcFreq = function(){
		$scope.hash = angular.copy($scope.master);

		for (var i = 0; i < $scope.cryptInput.length; i++) {
			switch($scope.cryptInput[i]){
				case "a":
				$scope.hash.a = $scope.hash.a + 1
				break;
				case "b":
				$scope.hash.b = $scope.hash.b + 1
				break;
				case "c":
				$scope.hash.c = $scope.hash.c + 1
				break;
				case "d":	
				$scope.hash.d = $scope.hash.d + 1
				break;
				case "e":
				$scope.hash.e = $scope.hash.e + 1
				break;
				case "f":
				$scope.hash.f = $scope.hash.f + 1
				break;
				case "g":
				$scope.hash.g = $scope.hash.g + 1
				break;
				case "h":
				$scope.hash.h = $scope.hash.h + 1
				break;
				case "i":
				$scope.hash.i = $scope.hash.i + 1
				break;
				case "j":
				$scope.hash.j = $scope.hash.j + 1
				break;
				case "k":
				$scope.hash.k = $scope.hash.k + 1
				break;
				case "l":
				$scope.hash.l = $scope.hash.l + 1
				break;
				case "m":
				$scope.hash.m = $scope.hash.m + 1
				break;
				case "n":
				$scope.hash.n = $scope.hash.n + 1
				break;
				case "o":
				$scope.hash.o = $scope.hash.o + 1
				break;
				case "p":
				$scope.hash.p = $scope.hash.p + 1
				break;
				case "q":
				$scope.hash.q = $scope.hash.q + 1
				break;
				case "r":
				$scope.hash.r = $scope.hash.r + 1
				break;
				case "s":
				$scope.hash.s = $scope.hash.s + 1
				break;
				case "t":
				$scope.hash.t = $scope.hash.t + 1
				break;
				case "u":
				$scope.hash.u = $scope.hash.u + 1
				break;
				case "v":
				$scope.hash.v = $scope.hash.v + 1
				break;
				case "w":
				$scope.hash.w = $scope.hash.w + 1
				break;
				case "x":
				$scope.hash.x = $scope.hash.x + 1
				break;
				case "y":
				$scope.hash.y = $scope.hash.y + 1
				break;
				case "z":
				$scope.hash.z = $scope.hash.z + 1
				break;
			}
		};
	};

})