'use strict';

function <%= cameledName %>Controller() {
  this.message = 'Hello';
}

angular.module('<%= scriptAppName %>')
  .controller('<%= classedName %>Controller', <%= cameledName %>Controller);
