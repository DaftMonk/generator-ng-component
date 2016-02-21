'use strict';

angular.module('<%= scriptAppName %>')
  .config(function ($routeProvider) {
    $routeProvider
      .when('<%= route %>', {
        template: '<<%= sluggedName %>-component></<%= sluggedName %>-component>'
      });
  });
