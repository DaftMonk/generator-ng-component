'use strict';
(function(){
<% if(hasFilter('es6')) { %>
class <%= classedName %>Controller {
  constructor() {
    this.message = 'Hello';
  }
}<% } else { %>
function <%= classedName %>Controller($scope) {
  $scope.message = 'Hello';
}<% } %>

angular.module('<%= scriptAppName %>')
  .component('<%= cameledName %>Component', {
    templateUrl: '<%= htmlUrl %>',
    controller: <%= classedName %>Controller
  });

})();
