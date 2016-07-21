'use strict';
const angular = require('angular');

/*@ngInject*/
export function <%= cameledName %>Controller() {
  this.message = 'Hello';
}

export default angular.module('<%= scriptAppName %>', [])
  .controller('<%= classedName %>Controller', <%= cameledName %>Controller)
  .name;
