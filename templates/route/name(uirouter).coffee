'use strict'

angular.module '<%= scriptAppName %>'
.config ($stateProvider) ->
  $stateProvider.state '<%= name %>',
    url: '<%= route %>'
    template: '<<%= kebabName %>></<%= kebabName %>>'
