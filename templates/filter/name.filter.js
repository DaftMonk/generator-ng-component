'use strict';
const angular = require('angular');

/*@ngInject*/
export function <%= cameledName %>Filter() {
  return function(input) {
    return `<%= cameledName %> filter: ${input}`;
  };
}


export default angular.module('<%= scriptAppName %>', [])
  .filter('<%= cameledName %>', <%= cameledName %>Filter)
  .name;
