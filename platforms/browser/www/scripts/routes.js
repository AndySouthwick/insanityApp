'use strict';
app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/video', {
        templateUrl:'templates/videoTemplate.html',
         controller: 'VideoCtrl'
    });
     $locationProvider.html5Mode(true);
})