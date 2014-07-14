'use strict'

angular.module('<%= scriptAppName %>').directive '<%= cameledName %>', ->
  templateUrl: '<%= htmlUrl %>'
  restrict: 'E'
  link: (scope, element, attrs) ->
