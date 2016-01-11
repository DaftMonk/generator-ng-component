'use strict';

angular.module('<%= scriptAppName %>')
  .config(function ($routeProvider) {
    $routeProvider
      .when('<%= route %>', {
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Controller'<% if(hasFilter('es6')) { %>,
        controllerAs: 'vm'<% } %>
      });
  });
