'use strict';
import angular from 'angular';

export function <%= cameledName %>Controller() {
  this.message = 'Hello';
}

export default angular.module('<%= moduleName %>')
  .controller('<%= classedName %>Controller', <%= cameledName %>Controller)
  .name;
