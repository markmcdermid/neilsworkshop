'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'v1'
  });
}])

.controller('View1Ctrl', [function() {
  this.formEntry = {title: "", name: "", type: ""};
  this.showModal = false;
  this.testtext = "hello";
}]);