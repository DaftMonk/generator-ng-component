'use strict'

angular.module '<%= scriptAppName %>'
.config ($routeSegmentProvider) ->
  $routeSegmentProvider
  .when '<%= route %>', '<%= name %>'
  .segment
    templateUrl: '<%= htmlUrl %>'
    controller: '<%= classedName %>Ctrl'
