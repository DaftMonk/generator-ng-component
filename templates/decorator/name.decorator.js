'use strict';
const angular = require('angular');

/*@ngInject*/
export function <%= cameledName %>Decorator($delegate) {
  // decorate the $delegate
  return $delegate;
}

export default angular.module('<%= scriptAppName %>', [])
  .config(function($provide) {
    $provide.decorator('<%= cameledName %>', <%= cameledName %>Decorator);
  })
  .name;
