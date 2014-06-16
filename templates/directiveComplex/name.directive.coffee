'use strict'

angular.module('<%= scriptAppName %>').directive '<%= cameledName %>', ->
  templateUrl: '<%= htmlUrl %>'
  restrict: 'E'
  link: (scope, element, attrs) ->
    element.text 'this is the <%= cameledName %> directive'