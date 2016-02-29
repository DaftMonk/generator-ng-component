'use strict';
(function(){
<% if(hasFilter('es6')) { %>
class <%= classedName %>Component {
  constructor() {
    this.message = 'Hello';
  }
}<% } else { %>
function <%= classedName %>Component($scope) {
  $scope.message = 'Hello';
}<% } %>

angular.module('<%= scriptAppName %>')
  .component('<%= classedName %>Component', {
    templateUrl: '<%= htmlUrl %>',
    controller: <%= classedName %>Component
  });

})();
