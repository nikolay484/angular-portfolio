'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl', HomeCtrl);
function HomeCtrl($scope, $rootScope) {
        blast();
   
    $rootScope.curPath = 'main';
}