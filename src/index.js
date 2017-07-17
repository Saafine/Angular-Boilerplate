import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
require('./styles/main.less');

let ang1 = angular.module('ang1', [ngRoute, ngAnimate]);

ang1.directive('testDirective', [function () {
  return {
    restrict: 'E', // E - elements, directive used as an element <something></something>. A - attribute,
    templateUrl: 'views/testDirective.html',
    transclude: true, // this gives tag <randomNinja>this.props.children</randomNinja> ability to pass children but it needs to be wrapped in <div ng-transclude></div>
    replace: true, // replaces custom tag <randomNinja> to div
    controller: 'testController'
  };
}]);

ang1.controller('testController', ['$scope', function ($scope) {
  $scope.testFunc = function () {
    console.log('working');
  };
}]);