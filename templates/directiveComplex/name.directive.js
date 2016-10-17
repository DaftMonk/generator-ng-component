'use strict';
const angular = require('angular');

export default angular.module('<%= scriptAppName %>', [])
  .directive('<%= cameledName %>', function() {
    return {
      <%_ if(hasFilter('webpack')) { -%>
      template: require('./<%=name%>.<%=templateExt%>'),
      <%_ } else { -%>
      templateUrl: '<%= htmlUrl %>',
      <%_ } -%>
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
