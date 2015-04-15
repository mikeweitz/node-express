'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('login form');
    $scope.setFilters = function (event) {
    	event.preventDefault();
    	console.log('Clicked!', event);
    };

    var nickname = false;

    $scope.send = function(){
    	console.log('click submit');
    	nickname = $scope.nickname;
			$rootScope.loggedUser = $scope.nickname;
    	window.alert($scope.nickname);
			$location.path('/');
    };

		
  });
