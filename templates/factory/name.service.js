'use strict';
const angular = require('angular');

/*@ngInject*/
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


export default angular.module('<%= scriptAppName %>', [])
  .factory('<%= cameledName %>', <%= cameledName %>Service)
  .name;
