"use strict";angular.module("clientApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){console.log("the fuck is going on with CSS?"),a.loggedUser||console.log("send user to login form"),a.$on("$routeChangeStart",function(c,d,e){null===a.loggedUser&&("partials/login.html"===d.templateUrl||b.path("/login"))})}]),angular.module("clientApp").controller("MainCtrl",["$scope","$rootScope",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],console.log("user is "+b.nickname),a.nickname=b.loggedUser}]),angular.module("clientApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("clientApp").controller("LoginCtrl",["$scope","$rootScope","$location",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],console.log("login form"),a.setFilters=function(a){a.preventDefault(),console.log("Clicked!",a)};var d=!1;a.send=function(){console.log("click submit"),d=a.nickname,b.loggedUser=a.nickname,window.alert(a.nickname),c.path("/")}}]);