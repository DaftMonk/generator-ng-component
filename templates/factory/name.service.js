'use strict';
import angular from 'angular';

export function <%= cameledName %>Service() {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    someMethod() {
      return meaningOfLife;
    }
  };
}


export default angular.module('<%= moduleName %>')
  .factory('<%= cameledName %>', <%= cameledName %>Service)
  .name;
