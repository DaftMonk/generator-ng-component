'use strict'

<%= classedName %>Component = ($scope) ->
  $scope.message = 'Hello'

'use strict'
angular.module('<%= scriptAppName %>').component '<%= classedName %>Component',
  templateUrl: '<%= htmlUrl %>'
  controller: <%= classedName %>Component
