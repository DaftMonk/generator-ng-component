'use strict'

angular.module '<%= scriptAppName %>'
.config ($routeProvider) ->
  $routeProvider.when '<%= route %>',
    template: '<<%= kebabName %>></<%= kebabName %>>'
