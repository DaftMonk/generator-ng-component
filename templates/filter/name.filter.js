'use strict';

function <%= cameledName %>Filter() {
  return function (input) {
    return '<%= cameledName %> filter: ' + input;
  };
}


angular.module('<%= scriptAppName %>')
  .filter('<%= cameledName %>', <%= cameledName %>Filter);
