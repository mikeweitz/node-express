'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run( function($rootScope, $location) {
    console.log('the fuck is going on with CSS?');
    // register listener to watch route changes
    if (!$rootScope.loggedUser) {
      console.log('send user to login form');
    }

    $rootScope.$on( '$routeChangeStart', function(event, next, current) {
      if ( !$rootScope.loggedUser ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl === 'partials/login.html' ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( '/login' );
        }
      }
    });
 });
