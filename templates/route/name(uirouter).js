'use strict';

angular.module('<%= scriptAppName %>')
  .config(function ($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Controller'<% if(hasFilter('es6')) { %>,
        controllerAs: 'vm'<% } %>
      });
  });
