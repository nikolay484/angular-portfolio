'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.version'
])
.config(Config)

.value('value',
        {
            site_title : 'Bestvision.co.il - Nothing is impossible',
            site_author : 'Nikolay waysman'
        })
.controller('AppCtrl', AppCtrl);

function AppCtrl($scope, value) { 
    $scope.author = value.site_author;
    $scope.title = value.site_title;
}
function Config($routeProvider, $locationProvider, $logProvider) {
            $routeProvider
                .otherwise({redirectTo : '/'});
//            $locationProvider.html5Mode(true);  // need to enable in future
            $logProvider.debugEnabled(true);
        }
