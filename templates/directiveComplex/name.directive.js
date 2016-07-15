'use strict';
import angular from 'angular';

export default angular.module('<%= moduleName %>')
  .directive('<%= cameledName %>', function() {
    return {
      <%_ if(filters.webpack) { -%>
      template: require('./<%=name%>.<%=templateExt%>'),
      <%_ } else { -%>
      templateUrl: '<%= htmlUrl %>',
      <%_ } -%>
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
