'use strict';
app.controller('MainCtrl', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.isCollapsed = false;
 })