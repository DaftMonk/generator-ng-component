'use strict';

angular.module('<%= scriptAppName %>')
  .config(function ($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        template: '<<%= kebabName %>></<%= kebabName %>>'
      });
  });
