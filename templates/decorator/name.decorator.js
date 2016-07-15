'use strict';
import angular from 'angular';

export function <%= cameledName %>Decorator($delegate)
  // decorate the $delegate
  return $delegate;
}

export default angular.module('<%= moduleName %>')
  .config(function($provide) {
    $provide.decorator('<%= cameledName %>', <%= cameledName %>Decorator);
  })
  .name;
