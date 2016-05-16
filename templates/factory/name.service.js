'use strict';

function <%= cameledName %>Service() {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    someMethod: function () {
      return meaningOfLife;
    }
  };
}


angular.module('<%= scriptAppName %>')
  .factory('<%= cameledName %>', <%= cameledName %>Service);
