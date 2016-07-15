'use strict';
import angular from 'angular';

export function <%= cameledName %>Filter() {
  return function(input) {
    return `<%= cameledName %> filter: ${input}`;
  };
}


export default angular.module('<%= moduleName %>')
  .filter('<%= cameledName %>', <%= cameledName %>Filter)
  .name;
