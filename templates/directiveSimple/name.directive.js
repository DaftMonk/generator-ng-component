'use strict';
import angular from 'angular';

export default angular.module('<%= moduleName %>')
  .directive('<%= cameledName %>', function() {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function(scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  })
  .name;
