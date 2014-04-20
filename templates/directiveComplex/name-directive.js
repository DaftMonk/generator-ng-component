'use strict';

angular.module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', function () {
    return {
      templateUrl: '<%= htmlPath %>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  });