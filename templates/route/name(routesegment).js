'use strict';

angular.module('<%= scriptAppName %>')
  .config(function ($routeSegmentProvider) {
    $routeSegmentProvider
      .when('<%= route %>', '<%= name %>')
      .segment('<%= name %>', {
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl'
      });
  });